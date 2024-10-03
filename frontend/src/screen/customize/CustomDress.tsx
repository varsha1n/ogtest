import { useState, useEffect } from "react";
import styles from "./CustomShirt.module.css";
import axios from "axios";

interface Option {
  name: string;
  subOptions: string[];
}

interface Pattern {
  name: string;
  cloth: string;
  color: string;
  price: string;
}

function CustomDress(): React.ReactElement {
  // Set the initial state with a pre-selected pattern and customization
  const [selectedImages, setSelectedImages] = useState<{ [key: string]: string | null }>({
    Fit: "db1.png",       // Pre-select the first option for Fit
    Necklines: "dn1.png", // Pre-select the first option for Necklines
    Sleeves: "ds1.png",   // Pre-select the first option for Sleeves
  });

  const [selectedPattern, setSelectedPattern] = useState<string>("pattern1.png");
  const [outputImagedress, setOutputImagedress] = useState<string | null>(null);
  
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
 

  const options: Option[] = [
    { name: "Fit", subOptions: ["db1.png", "db2.png", "db3.png"] },
    { name: "Necklines", subOptions: ["dn1.png", "dn2.png", "dn3.png", "dn4.png", "dn5.png"] },
    { name: "Sleeves", subOptions: ["ds1.png", "ds2.png", "ds3.png", "ds4.png", "ds5.png"] },
  ];

  const patterns: Pattern[] = [
    { name: "pattern1.png", cloth: "Bold Twill Shirt - White", color: "White", price: "$20" },
    { name: "pattern2.png", cloth: "Cotton Oxford Shirt - Blue", color: "Blue", price: "$25" },
    { name: "pattern3.png", cloth: "Wrinkle-Free Shirt - Green", color: "Green", price: "$30" },
    { name: "pattern4.png", cloth: "Lavender Herringbone Shirt", color: "Lavender", price: "$35" },
    { name: "pattern6.png", cloth: "Dark Blue Pinstriped Shirt", color: "Blue", price: "$40" },
    { name: "pattern7.png", cloth: "White Shirt", color: "White", price: "$40" },
  ];

  const handlePatternSelect = (pattern: string): void => {
    setSelectedPattern(pattern);
    sendDataToBackend(pattern, selectedImages);
  };

  const handleDesignSelect = (type: string, image: string): void => {
    const updatedDesigns = { ...selectedImages, [type]: image };
    setSelectedImages(updatedDesigns);

    if (selectedPattern) {
      sendDataToBackend(selectedPattern, updatedDesigns);
    }
  };

  const sendDataToBackend = (pattern: string, designs: { [key: string]: string | null }): void => {
    axios
      .post("https://l8ghzlvolc.execute-api.ap-south-2.amazonaws.com/dev/dress", { pattern, designs })
      .then((response) => {
        // Convert the binary data (latin-1 encoded) back to Base64 on the frontend
        const blendImageBase64 = `data:image/png;base64,${btoa(response.data.blend_image)}`;
        
        
        // Set the state with Base64 image data
        setOutputImagedress(blendImageBase64);
       
      })
      .catch((error) => {
        console.error("Error sending request to server:", error);
      });
  };

  // Send the default options to the server when the component mounts
  useEffect(() => {
    sendDataToBackend(selectedPattern, selectedImages);
  }, []);

  const openCustomizePopup = (): void => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    const popupElement = document.querySelector(`.${styles.popupContainer}`);
    if (popupElement) {
      popupElement.classList.add(styles.exiting);
    }
    setTimeout(() => {
      setPopupVisible(false);
    }, 500);
  };

  const getSelectedPatternInfo = (): Pattern | undefined => {
    return patterns.find((pattern) => pattern.name === selectedPattern);
  };

  

  return (
    <div className={styles.main}>
      <div className={styles.leftColumn}>
        <div className={styles.patternContainer}>
          {patterns.map((pattern) => (
            <div
              key={pattern.name}
              className={styles.patternItem}
              onClick={() => handlePatternSelect(pattern.name)}
            >
              <img
                src={`/images_show/${pattern.name}`}
                alt={pattern.name}
                className={`${styles.patternImage} ${selectedPattern === pattern.name ? styles.selected : ""}`}
              />
              <div className={styles.patternInfo}>
                <p className={styles.color}>{pattern.color}</p>
                <p className={styles.price}>{pattern.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.customContainer}>
          <button className={styles.customizeButton} onClick={openCustomizePopup}>
            <span className={styles.textContainer}>
              <span className={styles.text}>Customize</span>
            </span>
          </button>
        </div>
      </div>

      <div className={styles.rightColumn}>
      <div className={styles.outputContainer} style={{ width: "570px", height: "700px" }}>
  <img
    src={outputImagedress || ''} // Only using outputImagedress
    alt="Result"
    className={styles.outputImagedress}
    style={{
      display: outputImagedress ? 'block' : 'none', // Hide the image if outputImagedress is not set
      width: 'auto', // Increase the image size while keeping proportions
      height: '90%', // Automatically adjust the height based on the width
      marginLeft: 0, // Reset margin for centering
    }} 
  />
</div>


        <div className={styles.infoContainer}>
          <div className={styles.patternInfoContainer}>
            <div className={styles.selectedPatternInfo}>
              <h2 className={styles.customtext}>Your Custom Dress</h2>
              <p className={styles.clothtext}>{getSelectedPatternInfo()?.cloth || "Formal Shirt - White"}</p>
              <p className={styles.pricetext}>{getSelectedPatternInfo()?.price || "$25"}</p>
            </div>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div className={`${styles.popupContainer} ${popupVisible ? "" : styles.exiting}`}>
          <h1 className={styles.popupTitle}>Customize Your Dress</h1>
          <button className={styles.closeButton} onClick={closePopup}>
            &times;
          </button>
          <div className={styles.optionsContainer}>
            {options.map((option) => (
              <div key={option.name} className={styles.optionSection}>
                <h2 className={styles.optionTitle}>{option.name}</h2>
                <div className={styles.imageContainer}>
                  {option.subOptions.map((subOption) => (
                    <div
                      key={subOption}
                      className={`${styles.imageWrapper} ${selectedImages[option.name] === subOption ? styles.selected : ""}`}
                      onClick={() => handleDesignSelect(option.name, subOption)}
                    >
                      <img
                        src={`/images_show/${subOption}`}
                        alt={subOption}
                        className={styles.optionimage}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDress;
