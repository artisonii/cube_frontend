import React, { useEffect, useState } from "react";
import { customerData } from "../../data";
import axios from "axios";
import styles from "./CustomerDetails.module.css";

const CustomerDetails: React.FC<customerData> = ({
  name,
  details,
  imageUrl,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading,setLoading] = useState<boolean>(true)
  const generateImages = async () => {
    let arr: string[] = [];
    for (let i = 0; i < 9; i++) {
      const blobUrl = await getImage();
      arr.push(blobUrl);
    }
    setImages(arr);
    setLoading(false)
  };

  const getImage = async () => {
    try {
      const response = await axios.get(imageUrl, { responseType: "blob" });
      const blobUrl = URL.createObjectURL(response.data);
      return blobUrl;
    } catch (error) {
      console.error("Error fetching image:", error);
      return ''; // return empty string in case of error
    }
  };

  useEffect(() => {
    generateImages();
    const timer = setInterval(generateImages, 10000);

    return () => clearInterval(timer);
  }, [imageUrl]);

  return (
    <div id={styles.cardDetails}>
      <h1>{name} details here</h1>
      <p>{details}</p>
      <div className={styles.cardImage}>
        {!loading&& images.map((blobUrl, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={blobUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {
        loading&&<h2 className={styles.loading}>Loading Images...</h2>
      }
    </div>
  );
};

export default CustomerDetails;
