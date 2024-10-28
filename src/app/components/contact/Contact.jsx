import CommonButton from "../Atoms/commonButton/CommonButton";
import GoogleMapComponent from "../Atoms/googleMap/GoogleMapComponent";
import styles from "./contact.module.css";
import { lato } from "@/app/utils/googleFonts";

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Contactanos</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.downDiv}>
        <div className={styles.contactLeft}>
          <form className={styles.contactForm}>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="nombre"
                className={lato.className}
              ></input>
              <line></line>
            </div>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="email"
                className={lato.className}
              ></input>
              <line></line>
            </div>
            <textarea
              name="message"
              placeholder="mensaje"
              id="message"
              className={lato.className}
            ></textarea>
            <div className={`${styles.btnContainer}  ${lato.className}`}>
              <CommonButton text={"Enviar mensaje"} width={"300px"} />
            </div>
          </form>
        </div>
        <div className={`${styles.contactRight}`}>
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
