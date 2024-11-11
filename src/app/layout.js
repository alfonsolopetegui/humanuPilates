import "./globals.css";
import "../../public/dist/hamburgers.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { inter } from "./utils/googleFonts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Humanu Pilates",
  description: "Tu estudio de pilates en Caballito",
  keywords: [
    "humanu pilates",
    "humanu",
    "relax",
    "reacondicionamiento",
    "entrenamiento",
    "humanu",
    "manu",
    "pilates",
    "stretching",
    "salud",
    "caballito",
    "buenos aires",
    "caba",
    "estiramiento",
    "respiración",
    "estado físico",
    "prevención",
    "alineación",
    "postura",
    "dolor de espalda",
    "adelgazar",
    "cuidado de la salud",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
