import "./globals.css";
import "../../public/dist/hamburgers.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { inter } from "./utils/googleFonts";
import Head from "next/head";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Humanu Pilates",
  description:
    "Humanu Pilates es un centro de acondicionamiento físico. Trabajamos con reformer, circuito y MAT, combinando pilates clásico y contemporáneo. Nos encontramos en pleno Caballito",
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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </Head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
