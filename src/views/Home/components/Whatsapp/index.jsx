import React from "react";
import styles from "./styles.module.scss";

function Whatsapp() {
  return (
    <div
      className={styles.container}
      onClick={() =>
        window
          .open(
            "https://wa.me/555193114413?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20a%20Biblioteca%20Leiturica",
            "_blank"
          )
          .focus()
      }
    >
      <img src={process.env.PUBLIC_URL + "/images/icons-whatsapp.png"} alt="Logo Whatsapp" draggable="false" />
      <p>Fale Conosco</p>
    </div>
  );
}

export default Whatsapp;
