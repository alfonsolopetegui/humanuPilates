"use client"
import styles from "./mobileMenu.module.css";
import Link from "next/link";

const MobileMenu = ({isActive, handler}) => {


  return (
    <div className={`${styles.mobileMenuContainer} ${isActive ? styles.isActive : ""}`} onClick={handler}>
      <Link href={"#classes"}>Clases</Link>
      <Link href={"#us"}>Conocenos</Link>
      <Link href={"#study"}>Estudio</Link>
      <Link href={"#contact"}>Contacto</Link>
      
    </div>
  );
};

export default MobileMenu;
