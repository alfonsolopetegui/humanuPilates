"use client";
import Link from "next/link";
import styles from "./nav.module.css";

import { lato } from "@/app/utils/googleFonts";
import { useEffect, useState } from "react";

import Image from "next/image";
import HamburgerButton from "../Atoms/hamburguer/Hamburguer";
import MobileMenu from "../Atoms/mobileMenu/MobileMenu";

const Nav = () => {
  const [scrolling, setScrolling] = useState(window.scrollY > 100);
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={scrolling ? styles.navScrolled : styles.navContainer}>
      <div className={styles.navLeft}>
        <div className={styles.logoContainer}>
          <Image src={"/logoHumanuBlanco.png"} fill />
        </div>
      </div>
      <div className={`${styles.navRight} ${lato.className}`}>
        <Link href={"#classes"}>Clases</Link>
        <Link href={"#us"}>Conocenos</Link>
        <Link href={"#study"}>Estudio</Link>
        <Link href={"#contact"}>Contacto</Link>
        <Link href={""}>Area clientes</Link>
      </div>
      <div className={styles.hamburguerContainer}>
        <HamburgerButton
          onToggle={toggleMenu}
          isActive={isActive}
          // buttonRef={buttonRef}
        />
      </div>
      <MobileMenu isActive={isActive} handler={toggleMenu}/>
    </div>
  );
};

export default Nav;
