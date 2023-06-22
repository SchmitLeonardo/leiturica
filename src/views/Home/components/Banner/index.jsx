import React from "react";
import styles from "./styles.module.scss";

function Banner() {
  return (
    <div className={styles.container}>
      <img
        src="./logo-leiturica.png"
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
        src="./icon-arrow-down.png"
        alt=""
        className={styles.arrow}
        draggable="false"
      />
    </div>
  );
}

export default Banner;
