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

function CustomPant(): React.ReactElement {
  const [selectedImages, setSelectedImages] = useState<{ [key: string]: string | null }>({
    Fit: "pm1.png",
    Fastenings: "pf1.png",
    Cuffs: "pc1.png",
    Frontpockets: "pfp1.png",
    Backpockets: "pbp1.png",
  });

  const [selectedPattern, setSelectedPattern] = useState<string>("pattern4.png");
  const [outputImagepants, setOutputImagepants] = useState<string | null>(null);
  const [outputBackImagepants, setOutputBackImagepants] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [showBackImage, setShowBackImage] = useState<boolean>(false);

  const options: Option[] = [
    { name: "Fit", subOptions: ["pm1.png", "pm2.png"] },
    { name: "Fastenings", subOptions: ["pf1.png", "pf2.png", "pf3.png", "pf4.png"] },
    { name: "Cuffs", subOptions: ["pc1.png", "pc2.png"] },
    { name: "Frontpockets", subOptions: ["pfp1.png", "pfp2.png"] },
    { name: "Backpockets", subOptions: ["pbp1.png", "pbp2.png", "pbp3.png", "pbp4.png"] },
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
    sendDataToBackend(pattern, selectedImages); // Send data to backend when pattern is selected
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
      .post("http://127.0.0.1:5000/pants", { pattern, designs })
      .then((response) => {
        // Convert the binary data (latin-1 encoded) back to Base64 on the frontend
        const blendImageBase64 = `data:image/png;base64,${btoa(response.data.blend_image)}`;
        const backImageBase64 = `data:image/png;base64,${btoa(response.data.back_image)}`;
        
        console.log(blendImageBase64)
        // Set the state with Base64 image data
        setOutputImagepants(blendImageBase64);
        setOutputBackImagepants(backImageBase64);
      })
      .catch((error) => {
        console.error("Error sending request to server:", error);
      });
  };

  // Trigger server call on page load with default options and pattern
  useEffect(() => {
    sendDataToBackend(selectedPattern, selectedImages);
  }, []); // Empty dependency array ensures it runs once when the component mounts

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

  const toggleImage = () => {
    setShowBackImage((prev) => !prev);
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
                className={`${styles.patternImage} ${
                  selectedPattern === pattern.name ? styles.selected : ""
                }`}
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
      <div className={styles.outputContainer} style={{ width: "570px", height: "650px" }}>
  <img
    src={showBackImage && outputBackImagepants ? outputBackImagepants : outputImagepants || ''}
    alt="Result"
    className={styles.outputImagepants}
    style={{ 
      display: outputImagepants ? 'block' : 'none', // Hide the image if outputImagepants is not set
      width: 'auto', // Increase the image size while keeping proportions
      height: '90%', // Automatically adjust the height based on the width
      marginLeft: 0, // Reset margin for centering
    }} 
  />
</div>


        <div className={styles.infoContainer}>
          <div className={styles.patternInfoContainer}>
            <div className={styles.selectedPatternInfo}>
              <h2 className={styles.customtext}>Your Custom Pants</h2>
              <p className={styles.clothtext}>
                {getSelectedPatternInfo()?.cloth || "Formal Shirt - White"}
              </p>
              <p className={styles.pricetext}>
                {getSelectedPatternInfo()?.price || "$25"}
              </p>
            </div>
            <button className={styles.addToCartButton}>Add to Cart</button>
            <div className={styles.arrowButtons}>
              <button className={styles.leftArrowButton} onClick={toggleImage}>
                &larr;
              </button>
              <button className={styles.rightArrowButton} onClick={toggleImage}>
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div
          className={`${styles.popupContainer} ${
            popupVisible ? "" : styles.exiting
          }`}
        >
          <h1 className={styles.popupTitle}>Customize Your Pants</h1>
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
                      className={`${styles.imageWrapper} ${
                        selectedImages[option.name] === subOption
                          ? styles.selected
                          : ""
                      }`}
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

export default CustomPant;
