import React from "react";
import styles from "./styles.module.scss";

function Buy() {
  return (
    <div className={styles.container}>
      <h1>Agende seu atendimento!</h1>

      <div className={styles.card}>
        <h2>Biblioteca Leiturica</h2>
        <p className={styles.oldValue}>DE: R$260,00</p>
        <p className={styles.newValue}>POR: R$197,00</p>

        <div className={styles.button} onClick={() =>
        window
          .open(
            "https://wa.me/555193114413?text=Olá,%20gostaria%20de%20adquirir%20a%20Biblioteca%20Leiturica.%20Poderia%20me%20enviar%20o%20link%20para%20efetuar%20o%20pagamento?",
            "_blank"
          )
          .focus()
      }>Quero Agendar</div>
      </div>

      <p>
        <i>PAGAMENTO ONLINE 100% SEGURO</i>
      </p>
      <p>
        <i>Pague com boleto ou parcele em até 4x no seu cartão de crédito.</i>
      </p>
      <p>
        <i>
          CASO MUDE DE IDEIA VOCÊ TEM 7 DIAS PARA CANCELAR E RECEBER SEU
          DINHEIRO DE VOLTA.
        </i>
      </p>
    </div>
  );
}

export default Buy;
