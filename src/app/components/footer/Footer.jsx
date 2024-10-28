import styles from "./footer.module.css";
import { lato } from "@/app/utils/googleFonts";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={`${styles.footerContainer} ${lato.className}`}>
      <div className={styles.topDiv}>
        <div className={styles.footerLogo}>
          <Image src={"/logoHumanuBlanco.png"} fill alt={""}/>
        </div>
        <div className={styles.media}>
          <FontAwesomeIcon icon={faSquareFacebook} className="fa-fw" />
          <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
          <FontAwesomeIcon icon={faSquareFacebook} className="fa-fw" />
          <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
        </div>
        <div className={styles.footerContactanos}>
          <div className={styles.linesWrapper}>
            <div className={styles.lineContainer}>
              <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
              <h3>Neuquén 705, Buenos Aires</h3>
            </div>
            <div className={styles.lineContainer}>
              <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
              <h3>humanupilates@gmail.com</h3>
            </div>
            <div className={styles.lineContainer}>
              <FontAwesomeIcon icon={faPhone} className="fa-fw" />
              <h3>11- 4213 2345</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <h3>
          Desarrollado por www.alfonsolopetegui.com
        </h3>
      </div>
    </div>
  );
};

export default Footer;
