import React from "react";
import styles from "./styles.module.scss";

function About() {
  return (
    <div className={styles.component}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `${
            process.env.PUBLIC_URL +
            "/assets/images/image-background-1-masked.png"
          }`,
        }}
      >
        <p>
          Com a Biblioteca Leiturica, você terá acesso a uma vasta seleção de
          livros que serão ideais para ler em casa com seus filhos, estimulando
          a imaginação, as emoções, o senso estético e a reflexão.
        </p>
      </div>
      <div className={styles.content}>
        <p>
          Com a Biblioteca Leiturica, você terá acesso a uma vasta seleção de
          livros que serão ideais para ler em casa com seus filhos, estimulando
          a imaginação, as emoções, o senso estético e a reflexão.
        </p>
      </div>
    </div>
  );
}

export default About;
