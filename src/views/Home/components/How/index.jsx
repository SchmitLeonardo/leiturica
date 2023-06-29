import React from "react";
import styles from "./styles.module.scss";
import * as Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

function How() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Como funciona?</h1>
        <p>
          A Biblioteca Leiturica é uma consultoria personalizada para cada
          família. Você terá dois encontros online comigo, o primeiro para que
          eu possa conhecer as necessidades da sua família e interesses da sua
          criança e outro, após a seleção de livros, para que eu possa
          apresentar os livros selecionados especialmente para vocês.
        </p>
        <p>
          Após o segundo encontro, a compra dos livros fica a critério de cada
          família, que terá a liberdade de escolher quais livros comprar, quando
          comprá-los e de onde comprá-los.
        </p>
        <p>
          Durante o nosso primeiro encontro online, a família irá estabelecer um
          valor anual de investimento em livros e, com base nesse valor, serão
          definidas as indicações, garantindo pelo menos 24 livros selecionados
          especialmente para a sua família. Serão valorizadas escolhas de livros
          que possam ser lidos e relidos ao longo de toda a infância dos seus
          filhos, proporcionando uma experiência de leitura duradoura e
          enriquecedora.
        </p>
        <div
          className={styles.button}
          onClick={() =>
            window
              .open(
                "https://wa.me/555193114413?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Biblioteca%20Leiturica.",
                "_blank"
              )
              .focus()
          }
        >
          Quero saber mais
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}

export default How;
