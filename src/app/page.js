import styles from "./page.module.css";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Classes from "./components/classes/Classes";
import Conocenos from "./components/conocenos/Conocenos";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Home />
      <Classes />
      <Conocenos />
      <Gallery />
      <Contact />
    </div>
  );
}
