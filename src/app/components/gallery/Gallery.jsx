import styles from "./gallery.module.css";
import Image from "next/image";

import { lato } from "@/app/utils/googleFonts";

const Gallery = () => {
  return (
    <div className={styles.galleryContainer} id="study">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Nuestro estudio</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.galleryItemsContainer}>
        <div className={`${styles.item} ${styles.large}`}>
          <Image src="/pila1.jpg" fill className={styles.image} />
        </div>
        <div className={styles.item}>
          <Image src="/pila2.jpg" fill className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.large}`}>
          <Image src="/pila3.jpg" fill className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.large}`}>
          <Image src="/pila4.jpg" fill className={styles.image} />
        </div>
        <div className={styles.item}>
          <Image src="/pila5.jpg" fill className={styles.image} />
        </div>
        <div className={styles.item}>
          <Image src="/pila7.jpg" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
