"use client";
import CommonButton from "../Atoms/commonButton/CommonButton";
import GoogleMapComponent from "../Atoms/googleMap/GoogleMapComponent";
import styles from "./contact.module.css";
import { lato } from "@/app/utils/googleFonts";
import { useState } from "react";

//React Toastify
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, mensaje }),
    });

    if (res.ok) {
      setEnviado(true);
      setNombre("");
      setEmail("");
      setMensaje("");
      toast.success("Mensaje enviado exitosamente!");
    } else {
      toast.error("Error al enviar el mensaje.");
    }
  };

  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.titleContainer}>
        <h1 className={lato.className}>Contactanos</h1>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.downDiv}>
        <div className={styles.contactLeft}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="nombre"
                className={lato.className}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              ></input>
              <line></line>
            </div>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="email"
                className={lato.className}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <line></line>
            </div>
            <textarea
              name="message"
              placeholder="mensaje"
              id="message"
              className={lato.className}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
            <div className={`${styles.btnContainer}  ${lato.className}`}>
              <CommonButton
                text={"Enviar mensaje"}
                width={"300px"}
                type={"submit"}
              />
            </div>
          </form>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}  
          />
        </div>
        <div className={`${styles.contactRight}`}>
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
