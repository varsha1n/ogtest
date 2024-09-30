from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os

application = Flask(__name__)
CORS(application)  # Enable CORS

# Utility function to replace .jpg extension with .png
def replace_jpg_with_png(file_path):
    return file_path.replace(".jpg", ".png") if file_path.endswith(".jpg") else file_path

# Define the output directory for images
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Get the directory of this script
PUBLIC_DIR = os.path.abspath(os.path.join(BASE_DIR, 'public'))  # Get the public directory



@application.route('/designs', methods=['POST'])
def handle_designs():
    data = request.json
    pattern = data.get('pattern')
    designs = data.get('designs', {})
    
    # Log the received data
    print("Received Pattern:", pattern)
    print("Selected Designs:", designs)

    # Prepare paths
    output_path = os.path.join('blend_output.png')
    output_back_path="output_back.png"
    
    # Prepend 'public/images/' to all paths and replace .jpg with .png
    pattern_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(pattern)) if pattern else ''
    collar_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(designs.get('Collar', ''))) if 'Collar' in designs else ''
    sleeve_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(designs.get('Sleeve', ''))) if 'Sleeve' in designs else ''
    button_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(designs.get('Button', ''))) if 'Button' in designs else ''
    pocket_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(designs.get('Pocket', ''))) if 'Pocket' in designs else ''
    back_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(designs.get('Back', ''))) if 'Back' in designs else ''
    
    # Command to run the Python script
    command = f'python "{os.path.join(BASE_DIR, "blend.py")}" "{pattern_path}" "{collar_path}" "{sleeve_path}" "{button_path}" "{pocket_path}" "{back_path}" "{output_path}"'

    # Execute the Python script
    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        print("Script output:", output.decode())

        with open(output_path, 'rb') as blend_img, open(output_back_path, 'rb') as back_img:
            output_path = blend_img.read()
            back_data = back_img.read()
            
            
            return jsonify({
                'blend_image': output_path.decode('latin-1'),  # Ensure binary data is encoded properly
                'back_image': back_data.decode('latin-1')
            })
        
        
    except subprocess.CalledProcessError as e:
        print(f"Error executing script: {e.output.decode()}")
        return jsonify({'error': 'Error processing images'}), 500


# API endpoint to handle pants design uploads
@application.route('/pants', methods=['POST'])
def pants():
    data = request.json
    pattern = data.get('pattern')
    designs = data.get('designs', {})
    Fit = designs.get('Fit')
    Fastenings = designs.get('Fastenings')
    Cuffs = designs.get('Cuffs')
    Frontpockets = designs.get('Frontpockets')
    Backpockets = designs.get('Backpockets')

    # Log the received data
    print("Received Pattern:", pattern)
    print("Selected Designs:", designs)

    # Path to the output image
    output_path = "blend_output_pants.png"
    output_back_path = "output_back_pants.png"

    # Construct the command to run the Python script
    python_script_path = os.path.join(BASE_DIR, "blend_pants.py")

    # Prepend 'public/images/' to all paths and replace .jpg with .png
    pattern_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(pattern)) if pattern else ""
    fit_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Fit)) if Fit else ""
    fastenings_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Fastenings)) if Fastenings else ""
    cuffs_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Cuffs)) if Cuffs else ""
    frontpockets_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Frontpockets)) if Frontpockets else ""
    backpockets_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Backpockets)) if Backpockets else ""

        # Construct the command as a string
    command = f'python "{os.path.join(BASE_DIR, "blend_pants.py")}" "{pattern_path}" "{fit_path}" "{fastenings_path}" "{cuffs_path}" "{frontpockets_path}" "{backpockets_path}" "{output_path}"'

    # Execute the Python script
    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        print("Script output:", output.decode())

        with open(output_path, 'rb') as blend_img, open(output_back_path, 'rb') as back_img:
            output_path = blend_img.read()
            back_data = back_img.read()

            print('output_path',output_path.decode('latin-1'))
            print('back_image',back_data.decode('latin-1'))
            
            
            
            return jsonify({
                'blend_image': output_path.decode('latin-1'),  # Ensure binary data is encoded properly
                'back_image': back_data.decode('latin-1')
            })
        
        
    except subprocess.CalledProcessError as e:
        print(f"Error executing script: {e.output.decode()}")
        return jsonify({'error': 'Error processing images'}), 500


# API endpoint to handle dress design uploads
@application.route('/dress', methods=['POST'])
def dress():
    data = request.json
    pattern = data.get('pattern')
    designs = data.get('designs', {})
    Fit = designs.get('Fit')
    Necklines = designs.get('Necklines')
    Sleeves = designs.get('Sleeves')

    # Log the received data
    print("Received Pattern:", pattern)
    print("Selected Designs:", designs)

    # Path to the output image
    output_path = "blend_output_dress.png"

    # Construct the command to run the Python script
    python_script_path = os.path.join(BASE_DIR, "blend_dress.py")

    # Prepend 'public/images/' to all paths and replace .jpg with .png
    pattern_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(pattern)) if pattern else ""
    fit_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Fit)) if Fit else ""
    necklines_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Necklines)) if Necklines else ""
    sleeves_path = os.path.join(PUBLIC_DIR, 'images', replace_jpg_with_png(Sleeves)) if Sleeves else ""

    command = f'python "{os.path.join(BASE_DIR, "blend_dress.py")}" "{pattern_path}" "{fit_path}" "{necklines_path}" "{sleeves_path}" "{output_path}"'


    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        print("Script output:", output.decode())

        with open(output_path, 'rb') as blend_img:
            output_data = blend_img.read()  # Read the blend image data

        return jsonify({
            'blend_image': output_data.decode('latin-1')  # Send only the blend image as binary data
        })
    
    except subprocess.CalledProcessError as e:
        print(f"Error executing script: {e.output.decode()}")
        return jsonify({'error': 'Error processing images'}), 500



if __name__ == '__main__':
    application.run(host='0.0.0.0', port=5000)  # This line is optional if you're only using Gunicorn for deployment.

