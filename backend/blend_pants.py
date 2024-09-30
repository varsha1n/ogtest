import sys
from PIL import Image, ImageChops, ImageEnhance

def open_or_create_empty_image(path):
    """
    Opens an image or creates an empty (transparent) image if the path is invalid.
    """
    try:
        return Image.open(path).convert("RGBA")
    except IOError:
        return Image.new("RGBA", (1, 1), (0, 0, 0, 0))

def overlay_images(pattern_path, fit_path, fastening_path, cuff_path, Frontpockets_path, Backpockets_path, intermediate_path, intermediate_back_path):
    """
    Overlays collar, sleeve, button, pocket, and back images on the base pattern image.
    """
    print('Inside overlay_images function')

    # Process the front base image
    base_image = Image.open("public/images/pbase.png").convert("RGBA")
    print(f"Base image size: {base_image.size}")

    fit_image = open_or_create_empty_image(fit_path).resize(base_image.size, Image.LANCZOS)
    fastening_image = open_or_create_empty_image(fastening_path).resize(base_image.size, Image.LANCZOS)
    cuff_image = open_or_create_empty_image(cuff_path).resize(base_image.size, Image.LANCZOS)
    front_pockets_image = open_or_create_empty_image(Frontpockets_path).resize(base_image.size, Image.LANCZOS)

    # Overlay front images
    base_image.paste(fit_image, (0, 0), fit_image)
    base_image.paste(fastening_image, (0, 0), fastening_image)
    base_image.paste(cuff_image, (0, 0), cuff_image)
    base_image.paste(front_pockets_image, (0, 0), front_pockets_image)

    # Save the front intermediate image
    base_image.save(intermediate_path, format="PNG")
    print('Intermediate front image saved:', intermediate_path)

    # Close front images
    
    fit_image.close()
    fastening_image.close()
    cuff_image.close()
    front_pockets_image.close()

    # Process the back base image
    base_back_image = Image.open("public/images/pbase_back.png").convert("RGBA")
    print(f"Back base image size: {base_back_image.size}")

    back_pockets_image = open_or_create_empty_image(Backpockets_path).resize(base_back_image.size, Image.LANCZOS)

    # Overlay the back pocket image
    base_back_image.paste(back_pockets_image, (0, 0), back_pockets_image)

    # Save the back intermediate image
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

    # Create masks where non-background areas are white
    def create_colored_area_mask(image):
        mask = Image.new("L", image.size, 0)  # Start with a fully black mask (no areas selected)
        pixels = image.load()

        for x in range(image.width):
            for y in range(image.height):
                r, g, b, a = pixels[x, y]  # Get the RGBA value of the pixel
                # Check if the pixel is non-transparent and not white (colored area)
                if a > 0 and not (r == 255 and g == 255 and b == 255):
                    mask.putpixel((x, y), 255)  # Mark colored non-transparent areas as white in the mask
        return mask

    mask = create_colored_area_mask(intermediate_image)
    mask_back = create_colored_area_mask(intermediate_back_image)

    # Ensure the mask sizes match the pattern image size
    mask = mask.resize(pattern_image_intermediate.size, Image.LANCZOS)
    mask_back = mask_back.resize(pattern_image_back.size, Image.LANCZOS)

    # Create a blended image by applying the pattern to the colored areas
    def apply_pattern_with_mask(base_image, pattern_image, mask):
        pattern_image_with_mask = pattern_image.copy()
        pattern_image_with_mask.putalpha(mask)
        
        patterned_image = Image.new("RGBA", base_image.size)
        patterned_image.paste(pattern_image_with_mask, (0, 0), pattern_image_with_mask)
        
        # Blend the base image with the patterned image
        blended_image = ImageChops.multiply(base_image, patterned_image)
        return blended_image

    # Apply the pattern to the colored areas only
    blended_image = apply_pattern_with_mask(intermediate_image, pattern_image_intermediate, mask)
    blended_image.save(output_path, format="PNG")
    print(f'Blended image saved at {output_path}')

    blended_back_image = apply_pattern_with_mask(intermediate_back_image, pattern_image_back, mask_back)
    blended_back_image.save(output_back_path, format="PNG")
    print(f'Blended back image saved at {output_back_path}')


if __name__ == "__main__":
    

    pattern_path = sys.argv[1]
    fit_path = sys.argv[2]
    fastening_path = sys.argv[3]
    cuff_path = sys.argv[4]
    frontpockets_path = sys.argv[5]
    backpockets_path = sys.argv[6]
    output_path = sys.argv[7]
    
    
    

    intermediate_path = "intermediate.png"
    intermediate_back_path = "intermediate_back.png"
    output_back_path = "output_back_pants.png"
    
  
    

    overlay_images(pattern_path, fit_path, fastening_path, cuff_path,frontpockets_path,backpockets_path,intermediate_path,intermediate_back_path)
    blend_with_pattern(pattern_path, intermediate_path, intermediate_back_path, output_path, output_back_path)
