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
          <Image src="/estudio3.jpg" fill className={styles.image} />
        </div>
        <div className={styles.item}>
          <Image src="/estudio2.jpg" fill className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.large}`}>
          <Image src="/estudio4.jpg" fill className={styles.image} />
        </div>
        <div className={`${styles.item} ${styles.large}`}>
          <Image src="/pila4.jpg" fill className={styles.image} />
        </div>
        <div className={styles.item}>
          <Image src="/pila5.jpg" fill className={styles.image} />
        </div>
        <div className={styles.item}>
          <Image src="/estudio5.jpg" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
