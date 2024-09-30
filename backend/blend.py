import sys
from PIL import Image

def open_or_create_empty_image(path):
    """
    Opens an image or creates an empty (transparent) image if the path is invalid.
    """
    try:
        return Image.open(path).convert("RGBA")
    except IOError:
        return Image.new("RGBA", (1, 1), (0, 0, 0, 0))

def overlay_images(pattern_path, collar_path, sleeve_path, button_path, pocket_path, back_path, intermediate_path, intermediate_back_path):
    """
    Overlays collar, sleeve, button, pocket, and back images on the base pattern image.
    """
    print('Inside overlay_images function')

    base_image = Image.open("public/images/base.png").convert("RGBA")
    print(f"Base image size: {base_image.size}")

    collar_image = open_or_create_empty_image(collar_path).resize(base_image.size, Image.LANCZOS)
    sleeve_image = open_or_create_empty_image(sleeve_path).resize(base_image.size, Image.LANCZOS)
    button_image = open_or_create_empty_image(button_path).resize(base_image.size, Image.LANCZOS)
    pocket_image = open_or_create_empty_image(pocket_path).resize(base_image.size, Image.LANCZOS)

    base_image.paste(collar_image, (0, 0), collar_image)
    base_image.paste(sleeve_image, (0, 0), sleeve_image)
    base_image.paste(button_image, (0, 0), button_image)
    base_image.paste(pocket_image, (0, 0), pocket_image)

    if 's1' in sleeve_path:
        cuff_path = sleeve_path.replace('s1', 'cuff')
        try:
            cuff_image = Image.open(cuff_path).convert("RGBA").resize(base_image.size, Image.LANCZOS)
            base_image.paste(cuff_image, (0, 0), cuff_image)
            print(f"Overlayed cuff image from {cuff_path}")
        except Exception as e:
            print(f"Failed to overlay cuff image: {e}")

    base_image.save(intermediate_path, format="PNG")
    print('Intermediate image saved:', intermediate_path)

    collar_image.close()
    sleeve_image.close()
    button_image.close()
    pocket_image.close()

    base_back_image = Image.open("public/images/cba1.png").convert("RGBA")

    if 's1' in sleeve_path:
        sleeve_image = Image.open("public/images/sba1.png").convert("RGBA").resize(base_back_image.size, Image.LANCZOS)
    else:
        sleeve_image = Image.open("public/images/sba2.png").convert("RGBA").resize(base_back_image.size, Image.LANCZOS)

    back_image = open_or_create_empty_image(back_path).resize(base_back_image.size, Image.LANCZOS)

    base_back_image.paste(sleeve_image, (0, 0), sleeve_image)
    base_back_image.paste(back_image, (0, 0), back_image)

    base_back_image.save(intermediate_back_path, format="PNG")
    print('Intermediate back image saved:', intermediate_back_path)
def blend_with_pattern(pattern_path, intermediate_path, intermediate_back_path, output_path, output_back_path):
    """
    Blends the intermediate image and intermediate back image with the pattern image.
    """
    # Open the intermediate image, intermediate back image, and pattern image
    intermediate_image = Image.open(intermediate_path).convert("RGBA")
    intermediate_back_image = Image.open(intermediate_back_path).convert("RGBA")
    pattern_image = Image.open(pattern_path).convert("RGBA")

    # Resize the pattern image to match the size of the intermediate images
    pattern_image_intermediate = pattern_image.resize(intermediate_image.size, Image.LANCZOS)
    pattern_image_back = pattern_image.resize(intermediate_back_image.size, Image.LANCZOS)

    # Convert intermediate images to grayscale to create masks
    grayscale_image = intermediate_image.convert("L")
    grayscale_back_image = intermediate_back_image.convert("L")

    # Create masks where non-black areas are white
    mask = Image.new("L", intermediate_image.size, 0)
    mask_back = Image.new("L", intermediate_back_image.size, 0)
    non_black_threshold = 1

    for x in range(intermediate_image.width):
        for y in range(intermediate_image.height):
            if grayscale_image.getpixel((x, y)) > non_black_threshold:
                mask.putpixel((x, y), 255)

    for x in range(intermediate_back_image.width):
        for y in range(intermediate_back_image.height):
            if grayscale_back_image.getpixel((x, y)) > non_black_threshold:
                mask_back.putpixel((x, y), 255)

    # Ensure the mask sizes match the pattern image size
    mask = mask.resize(pattern_image_intermediate.size, Image.LANCZOS)
    mask_back = mask_back.resize(pattern_image_back.size, Image.LANCZOS)

    # Apply the pattern to the non-black areas of the intermediate image
    pattern_image_with_mask = pattern_image_intermediate.copy()
    pattern_image_with_mask.putalpha(mask)

    patterned_image = Image.new("RGBA", intermediate_image.size)
    patterned_image.paste(pattern_image_with_mask, (0, 0), pattern_image_with_mask)

    # Blend the intermediate image with the patterned image
    blended_image = Image.blend(intermediate_image, patterned_image, alpha=0.5)
    blended_image.save(output_path, format="PNG")
    print(f'Blended image saved at {output_path}')

    # Apply the pattern to the non-black areas of the intermediate back image
    pattern_image_with_mask_back = pattern_image_back.copy()
    pattern_image_with_mask_back.putalpha(mask_back)

    patterned_back_image = Image.new("RGBA", intermediate_back_image.size)
    patterned_back_image.paste(pattern_image_with_mask_back, (0, 0), pattern_image_with_mask_back)

    # Blend the intermediate back image with the patterned back image
    blended_back_image = Image.blend(intermediate_back_image, patterned_back_image, alpha=0.5)
    blended_back_image.save(output_back_path, format="PNG")
    print(f'Blended back image saved at {output_back_path}')



if __name__ == "__main__":
    if len(sys.argv) != 8:
        print("Usage: python blend.py <pattern_path> <collar_path> <sleeve_path> <button_path> <pocket_path> <back_path> <output_path>")
        sys.exit(1)

    print("Paths received from command line")

    pattern_path = sys.argv[1]
    collar_path = sys.argv[2]
    sleeve_path = sys.argv[3]
    button_path = sys.argv[4]
    pocket_path = sys.argv[5]
    back_path = sys.argv[6]
    output_path = sys.argv[7]
    

    intermediate_path = "intermediate.png"
    intermediate_back_path = "intermediate_back.png"
    output_back_path = "output_back.png"
    

    overlay_images(pattern_path, collar_path, sleeve_path, button_path, pocket_path, back_path, intermediate_path, intermediate_back_path)
    blend_with_pattern(pattern_path, intermediate_path, intermediate_back_path, output_path, output_back_path)
