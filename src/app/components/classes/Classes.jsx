import styles from "./classes.module.css";
import Image from "next/image";

import { lato } from "@/app/utils/googleFonts";

const Classes = () => {
  return (
    <div className={styles.classesContainer} id="classes">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Nuestras clases</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={`${styles.articlesContainer} ${lato.className}`}>
        <article className={styles.cardContainer}>
          <Image src={"/pila3.jpg"} fill />
          <div className={styles.textContainer}>
            <h3>Pilates MAT</h3>
            <p>
              Método Pilates que se realiza sobre una colchoneta. Los
              movimientos se llevan a cabo a cuerpo libre, es decir, que no se
              prevé la asistencia de máquinas auxiliares.
            </p>
          </div>
          <div className={styles.cardOpacity}></div>
        </article>
        <article className={styles.cardContainer}>
          <Image src={"/pila4.jpg"} fill />
          <div className={styles.textContainer}>
            <h3>Stretching</h3>
            <p>
              Técnica de fuerza que consiste en estirar los músculos, tendones y
              ligamentos. La primera finalidad es la de mejorar la flexibilidad.{" "}
            </p>
          </div>
          <div className={styles.cardOpacity}></div>
        </article>
        <article className={styles.cardContainer}>
          <Image src={"/pila8.jpg"} fill />
          <div className={styles.textContainer}>
            <h3>Pilates Reformer</h3>
            <p>
              La máquina reformer es una de las máquinas del método pilates más
              conocidas, debido a que permite ajustarse a las necesidades de
              cada persona. El pilates reformer centra los movimientos en el
              músculo o conjunto de músculos que quieras fortalecer. Es el
              método de ejercicio más versátil, ya que se adecua a las
              necesidades de principiantes y expertos.
            </p>
          </div>
          <div className={styles.cardOpacity}></div>
        </article>
      </div>
    </div>
  );
};

export default Classes;
