import "./globals.css";
import "../../public/dist/hamburgers.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { inter } from "./utils/googleFonts";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: "Humanu Pilates",
  description: "Tu estudio de pilates en Caballito",
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
