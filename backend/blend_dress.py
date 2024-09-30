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

def overlay_images(pattern_path, fit_path, neckline_path, sleeve_path, intermediate_path):
    """
    Overlays collar, sleeve, button, pocket, and back images on the base pattern image.
    """
    print('Inside overlay_images function')
    middle_path="public/images/dmiddle.png"

    # Process the front base image
    base_image = Image.open("public/images/dbase.png").convert("RGBA")
    print(f"Base image size: {base_image.size}")

    fit_image = open_or_create_empty_image(fit_path).resize(base_image.size, Image.LANCZOS)
    neckline_image = open_or_create_empty_image(neckline_path).resize(base_image.size, Image.LANCZOS)
    sleeve_image = open_or_create_empty_image(sleeve_path).resize(base_image.size, Image.LANCZOS)
    middle_image = open_or_create_empty_image(middle_path).resize(base_image.size, Image.LANCZOS)


    # Overlay front images
    base_image.paste(fit_image, (0, 0), fit_image)
    base_image.paste(neckline_image, (0, 0), neckline_image)
    base_image.paste(sleeve_image, (0, 0), sleeve_image)
    base_image.paste(middle_image, (0, 0), middle_image)
   

    # Save the front intermediate image
    base_image.save(intermediate_path, format="PNG")
    print('Intermediate front image saved:', intermediate_path)





def blend_with_pattern(pattern_path, intermediate_path, output_path):
    """
    Blends the intermediate image and intermediate back image with the pattern image.
    """
    # Open the intermediate image, intermediate back image, and pattern image
    intermediate_image = Image.open(intermediate_path).convert("RGBA")
    
    pattern_image = Image.open(pattern_path).convert("RGBA")

    # Resize the pattern image to match the size of the intermediate images
    pattern_image_intermediate = pattern_image.resize(intermediate_image.size, Image.LANCZOS)
    

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
   

    # Ensure the mask sizes match the pattern image size
    mask = mask.resize(pattern_image_intermediate.size, Image.LANCZOS)
   

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

    


if __name__ == "__main__":
   

    print("Paths received from command line")

    pattern_path = sys.argv[1]
    fit_path = sys.argv[2]
    neckline_path = sys.argv[3]
    sleeve_path = sys.argv[4]
   
    
    
    

    intermediate_path = "intermediate.png"

    output_path = "blend_output_dress.png"
  
    

    overlay_images(pattern_path, fit_path, neckline_path, sleeve_path,intermediate_path)
    blend_with_pattern(pattern_path, intermediate_path,  output_path)
