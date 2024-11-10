"use client";
import styles from "./gallery.module.css";
import Image from "next/image";
import { lato } from "@/app/utils/googleFonts";
import { useState } from "react";
import ImageViewer from "../Atoms/imageViewer/ImageViewer";

const Gallery = () => {
  const [selected, setSelected] = useState("");

  // Función para manejar la selección de imagen
  const handleImage = (url) => {
    setSelected(url); // Establece la URL de la imagen seleccionada
  };

  const handleClose = () => {
    setSelected("");
  };

  return (
    <div className={styles.galleryContainer} id="study">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Nuestro estudio</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.galleryItemsContainer}>
        <div
          className={`${styles.item} ${styles.large}`}
          onClick={() => handleImage("/estNue3.jpg")}
        >
          <Image
            src="/estNue3.jpg"
            width={500}
            height={500}
            className={styles.image}
            alt="Descripción de la imagen 1"
          />
        </div>
        <div
          className={styles.item}
          onClick={() => handleImage("/estNue1.jpg")}
        >
          <Image
            src="/estNue1.jpg"
            width={500}
            height={500}
            className={styles.image}
            alt="Descripción de la imagen 2"
          />
        </div>
        <div
          className={`${styles.item} ${styles.large}`}
          onClick={() => handleImage("/estudio3.jpg")}
        >
          <Image
            src="/estudio3.jpg"
            width={500}
            height={500}
            className={styles.image}
            alt="Descripción de la imagen 3"
          />
        </div>
        <div
          className={`${styles.item} ${styles.large}`}
          onClick={() => handleImage("/estNue2.jpg")}
        >
          <Image
            src="/estNue2.jpg"
            width={500}
            height={500}
            className={styles.image}
            alt="Descripción de la imagen 4"
          />
        </div>
        <div
          className={styles.item}
          onClick={() => handleImage("/estNue5.jpg")}
        >
          <Image
            src="/estNue5.jpg"
            width={500}
            height={500}
            className={styles.image}
            alt="Descripción de la imagen 5"
          />
        </div>
        <div
          className={styles.item}
          onClick={() => handleImage("/estNue4.jpg")}
        >
          <Image
            src="/estNue4.jpg"
            width={500}
            height={500}
            className={styles.image}
            alt="Descripción de la imagen 6"
          />
        </div>
      </div>
      {selected && <ImageViewer url={selected} onClose={handleClose} />}
    </div>
  );
};

export default Gallery;
