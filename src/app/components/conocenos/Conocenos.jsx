import styles from "./conocenos.module.css";
import { lato } from "@/app/utils/googleFonts";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Conocenos = () => {
  return (
    <div className={styles.conocenosContainer} id="us">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Conocenos</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.articleContainer}>
        <div className={`${styles.textContainer} ${lato.className}`}>
          <h1>Hola, soy Manu</h1>

          <p>
            <FontAwesomeIcon icon={faAnglesRight} className="fa-fw" />
            Voy a ser tu guía en esta hermosa disciplina
          </p>
          <p>
            <FontAwesomeIcon icon={faAnglesRight} className="fa-fw" />
            {`Soy profesor de Educación física recibido en ISEF N2 "Dickens"`}
          </p>
          <p>
            <FontAwesomeIcon icon={faAnglesRight} className="fa-fw" />
            Hice mi instructurado en Pilates clásico y reformer en IRPA
          </p>
          <p>
            <FontAwesomeIcon icon={faAnglesRight} className="fa-fw" />
            Soy docente y entrenador con mas de 10 años de experiencia
          </p>
          <p>
            <FontAwesomeIcon icon={faAnglesRight} className="fa-fw" />
            Estoy en constante formación para brindar siempre lo mejor
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image src="/conocenos.jpg" width={500} height={500} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
