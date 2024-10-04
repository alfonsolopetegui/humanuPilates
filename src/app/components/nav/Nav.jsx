"use client";
import Link from "next/link";
import styles from "./nav.module.css";

import { lato } from "@/app/utils/googleFonts";
import { useEffect, useState } from "react";

import Image from "next/image";

const Nav = () => {
  const [scrolling, setScrolling] = useState(window.scrollY > 100);

  const handleScroll = () => {
    setScrolling(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scrolling ? styles.navScrolled : styles.navContainer}>
      <div className={styles.navLeft}>
        <div className={styles.logoContainer}>
          <Image src={"/logoHumanuBlanco.png"} fill/>
        </div>
      </div>
      <div className={`${styles.navRight} ${lato.className}`}>
        <Link href={"#classes"}>Clases</Link>
        <Link href={"#us"}>Conocenos</Link>
        <Link href={"#study"}>Estudio</Link>
        <Link href={"#contact"}>Contacto</Link>
        <Link href={""}>Area clientes</Link>
      </div>
    </div>
  );
};

export default Nav;
