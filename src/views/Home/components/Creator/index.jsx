import React from "react";
import styles from "./styles.module.scss";
import { Row } from "../../../../components";
import creator from "/public/assets/images/image-natani-perotto.jpeg";

function Creator() {
  return (
    <div className={styles.container}>
      <Row>
        <div className={styles.picture}>
          <img src={creator} alt="Natani Perotto Imagem" draggable="false" />
        </div>
        <div className={styles.content}>
          <h1>Olá!</h1>
          <p>
            Sempre fui apaixonada por livros, mas apenas descobri a literatura
            infantil durante a gravidez da minha filha, quando comecei a me
            questionar quais livros seriam adequados para um bebê e como lê-los.
            Desde então, há quase cinco anos, venho estudando a fundo o assunto
            e colocando todo esse conhecimento em prática no meu dia a dia. Sou
            graduanda em Pedagogia e fundei o Clube do Livro Infantil Leiturica
            na cidade de São Leopoldo, onde tenho a oportunidade de compartilhar
            minha paixão pela literatura infantil e ajudar outras famílias a
            descobrir o maravilhoso mundo dos livros.
          </p>
          <h4>- Natani Perotto</h4>
        </div>
      </Row>
    </div>
  );
}

export default Creator;
