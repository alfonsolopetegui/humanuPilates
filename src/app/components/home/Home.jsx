"use client";
import styles from "./home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { birth, lato} from "@/app/utils/googleFonts";
import CommonButton from "../Atoms/commonButton/CommonButton";
import Link from "next/link";

const Home = () => {
  const [fadeInH1, setFadeInH1] = useState(false);
  const [fadeInH2, setFadeInH2] = useState(false);
  const [fadeInH3, setFadeInH3] = useState(false);
 

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeInH1(true);
    }, 100); 

    const timer2 = setTimeout(() => {
      setFadeInH2(true);
    }, 700); 

    const timer3 = setTimeout(() => {
      setFadeInH3(true);
    }, 1500);

   

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
   
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeImageContainer}>
        <Image src={"/estudio1.jpg"} fill alt={""}/>
      </div>

      {/* opacity */}
      <div className={styles.opacity}></div>

      {/* <div className={`${styles.textContainer} ${lato.className}`}>
        <h1 className={fadeInH1 ? styles.fadeIn : ""}>el mejor lugar</h1>
        <h2 className={fadeInH2 ? styles.fadeIn : ""}>para tu bienestar</h2>
      </div> */}
      <div className={`${styles.titleContainer} ${lato.className}`}>
        <h1 className={`${fadeInH1 ? styles.fadeIn : ""} ${birth.className}`}>Humanu</h1>
        <h2 className={fadeInH2 ? styles.fadeIn : ""}>estudio pilates</h2>
        <div
          className={
            fadeInH3
              ? `${styles.fadeIn} ${styles.btnContainer}`
              : styles.btnContainer
          }
        >
          <Link href={"#classes"}>
            <CommonButton text={"conocé mas"} width={"160px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
