import React from "react";
import styles from "./styles.module.scss";

function Banner() {
  return (
    <div className={styles.container} 
    style={{
      backgroundImage: `${
        process.env.PUBLIC_URL +
        "/assets/images/image-background-banner-masked.png"
      }`,
    }}>
      <img
        src={process.env.PUBLIC_URL + "/assets/images/logo-leiturica.png"}
        alt=""
        draggable="false"
      />
      <p>
        Você deseja <b>incentivar</b> seus filhos a se tornarem <b>leitores</b>,
        mas não sabe por onde <b>começar</b>?
      </p>
      <p>
        <b>
          A <b>Biblioteca Personalizada</b> pode te ajudar!
        </b>
      </p>
      <img
        src={process.env.PUBLIC_URL + "/assets/icons/icon-arrow-down.png"}
        alt=""
        className={styles.arrow}
        draggable="false"
      />
    </div>
  );
}

export default Banner;
