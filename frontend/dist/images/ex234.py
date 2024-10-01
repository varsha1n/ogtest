from PIL import Image


def apply_pattern(base_image_path, pattern_image_path, output_image_path):
    # Open the base image and pattern image
    base_image = Image.open(base_image_path).convert("RGBA")
    pattern_image = Image.open(pattern_image_path).convert("RGBA")

    # Resize pattern image to match base image size if necessary
    pattern_image = pattern_image.resize(base_image.size, Image.LANCZOS)

    # Convert base image to grayscale to create a mask
    grayscale_image = base_image.convert("L")

    # Create a new mask where non-black areas are white
    mask = Image.new(
        "L", base_image.size, 0
    )  # Create a new mask image with black background
    non_black_threshold = 1  # Adjust this threshold if needed

    for x in range(base_image.width):
        for y in range(base_image.height):
            if (
                grayscale_image.getpixel((x, y)) > non_black_threshold
            ):  # Non-black areas
                mask.putpixel((x, y), 255)  # Set non-black areas in the mask to white

    # Convert mask to RGBA
    mask = mask.convert("L")

    # Apply the pattern to the non-black areas
    pattern_image.putalpha(mask)

    # Create a new image to hold the pattern applied to the non-black areas
    patterned_image = Image.new("RGBA", base_image.size)
    patterned_image.paste(pattern_image, (0, 0), pattern_image)

    # Blend the patterned image with the base image
    blended_image = Image.blend(base_image, patterned_image, alpha=0.5)

    # Save the resulting image
    blended_image.save(output_image_path, format="PNG")


# Example usage
base_image_path = "./base.png"
pattern_image_path = "./pattern2.png"
output_image_path = "./pattern2_show.png"

# Apply the pattern using the created mask
apply_pattern(base_image_path, pattern_image_path, output_image_path)
