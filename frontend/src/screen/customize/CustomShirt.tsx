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




function CustomShirt(): React.ReactElement {
  

  
  
  const [selectedImages, setSelectedImages] = useState<{ [key: string]: string | null }>({
    Collar: "c5.png",
    Pocket: "p1.png",
    Sleeve: "s1.png",
    Button: "b1.jpg",
    Back: "ba1.png",
  });

  const [selectedPattern, setSelectedPattern] = useState<string>("pattern1.png");
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [outputBackImage, setOutputBackImage] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [showBackImage, setShowBackImage] = useState<boolean>(false);

  const options: Option[] = [
    { name: "Collar", subOptions: ["c1.png", "c2.png", "c3.png", "c4.png", "c5.png", "c6.png"] },
    { name: "Pocket", subOptions: ["p1.png", "p2.png"] },
    { name: "Sleeve", subOptions: ["s1.png", "s2.png"] },
    { name: "Button", subOptions: ["b1.jpg", "b2.jpg"] },
    { name: "Back", subOptions: ["ba1.png", "ba4.png", "ba2.png", "ba3.png"] },
  ];

  const patterns: Pattern[] = [
    { name: "pattern1.png", cloth: "Bold Twill Shirt - White", color: "White", price: "$20" },
    { name: "pattern2.png", cloth: "Cotton Oxford Shirt - Blue", color: "Blue", price: "$25" },
    { name: "pattern3.png", cloth: "Wrinkle-Free Shirt - Green", color: "Green", price: "$30" },
    { name: "pattern4.png", cloth: "Lavender Herringbone Shirt", color: "Lavender", price: "$35" },
    { name: "pattern6.png", cloth: "Dark Blue Pinstriped Shirt", color: "Blue", price: "$40" },
    { name: "pattern7.png", cloth: "White Shirt", color: "White", price: "$40" },
  ];

  // Send default data to the backend when the page loads
  useEffect(() => {
    sendDataToBackend(selectedPattern, selectedImages);
  }, []); // Empty dependency array means it runs only on mount

  const handlePatternSelect = (pattern: string): void => {
    setSelectedPattern(pattern);
    sendDataToBackend(pattern, selectedImages); // Send updated pattern to the backend
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
      .post("https://l8ghzlvolc.execute-api.ap-south-2.amazonaws.com/dev/designs", { pattern, designs })
      .then((response) => {
        // Convert the binary data (latin-1 encoded) back to Base64 on the frontend
        const blendImageBase64 = `data:image/png;base64,${btoa(response.data.blend_image)}`;
        const backImageBase64 = `data:image/png;base64,${btoa(response.data.back_image)}`;
        
        // Set the state with Base64 image data
        setOutputImage(blendImageBase64);
        setOutputBackImage(backImageBase64);
      })
      .catch((error) => {
        console.error("Error sending request to server:", error);
      });
  };

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
    return patterns.find(pattern => pattern.name === selectedPattern);
  };

  const toggleImage = () => {
    setShowBackImage(prev => !prev);
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
        <div className={styles.outputContainer}>
          <img
            src={showBackImage && outputBackImage ? outputBackImage : outputImage || ''}
            alt="Result"
            className={styles.outputImage}
            style={{ display: outputImage ? 'block' : 'none' }} // Hide the image if outputImage is not set
          />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.patternInfoContainer}>
            <div className={styles.selectedPatternInfo}>
              <h2 className={styles.customtext}>Your Custom Shirt</h2>
              <p className={styles.clothtext}>{getSelectedPatternInfo()?.cloth || "Formal Shirt - White"}</p>
              <p className={styles.pricetext}>{getSelectedPatternInfo()?.price || "$25"}</p>
            </div>
            <button className={styles.addToCartButton} onClick={() => {
                  
                  console.log("added");
                }}>
              Add to Cart
            </button>
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
        <div className={`${styles.popupContainer} ${popupVisible ? "" : styles.exiting}`}>
          <h1 className={styles.popupTitle}>Customize Your Shirt</h1>
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
                      <img src={`/images_show/${subOption}`} alt={subOption} className={styles.optionImage} />
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

export default CustomShirt;
