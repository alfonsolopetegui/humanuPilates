import styles from "./conocenos.module.css";
import { lato } from "@/app/utils/googleFonts";
import Image from "next/image";

const Conocenos = () => {
  return (
    <div className={styles.conocenosContainer} id="us">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Nuestro mentor</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.articleContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image src="/profePilates2.png" fill />
          </div>
        </div>
        <div className={styles.textContainer}>
          {/* <h1>Hola, soy Manu</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
