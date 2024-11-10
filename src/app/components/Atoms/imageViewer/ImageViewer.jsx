"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./imageViewer.module.css";

const ImageViewer = ({ url, onClose }) => {
  const [orientation, setOrientation] = useState("landscape");

  useEffect(() => {
    const img = new window.Image(); // Usar el objeto Image nativo
    img.src = url;
    img.onload = () => {
      setOrientation(
        img.naturalWidth > img.naturalHeight ? "landscape" : "portrait"
      );
    };

    
  }, [url]);

  return (
    <div className={styles.viewerContainer} onClick={onClose}>
      <div className={`${styles.imageContainer} ${styles[orientation]}`}>
        <Image
          src={url}
          alt="Descripción de la imagen"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
        {/* <button className={styles.closeButton} onClick={onClose}>
          Cerrar
        </button> */}
      </div>
    </div>
  );
};

export default ImageViewer;
