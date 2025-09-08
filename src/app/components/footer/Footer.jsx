import styles from "./footer.module.css";
import { lato } from "@/app/utils/googleFonts";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {

  //WhatsApp
  const phoneNumber = "5491151353248"; // Cambia esto por tu número de WhatsApp
  const message = "Hola, quiero más información sobre Pilates!"; // Mensaje predefinido

  return (
    <div className={`${styles.footerContainer} ${lato.className}`}>
      <div className={styles.topDiv}>
        <div className={styles.footerLogo}>
          <Image src={"/logoHumanuBlanco.png"} fill alt={""} />
        </div>
        <div className={styles.media}>
          <Link href={"https://www.facebook.com/manu.pilates.3"}>
            <FontAwesomeIcon icon={faSquareFacebook} className="fa-fw" />
          </Link>
          <Link href={"https://www.instagram.com/humanupilates"}>
            <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
          </Link>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="fa-fw" />
          </a>
        </div>
        <div className={styles.footerContactanos}>
          <div className={styles.linesWrapper}>
            <div className={styles.lineContainer}>
              <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
              <h3>Neuquén 705, Buenos Aires</h3>
            </div>
            <div className={styles.lineContainer}>
              <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
              <h3>manupropilates@gmail.com</h3>
            </div>
            <div className={styles.lineContainer}>
              <FontAwesomeIcon icon={faPhone} className="fa-fw" />
              <h3>11- 5135 3248</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <h3>Desarrollado por www.alfonsolopetegui.com</h3>
      </div>
    </div>
  );
};

export default Footer;
