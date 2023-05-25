import React from 'react';
import styles from './styles.module.scss';
import { Row } from '../../../../components';
import book from '../../../../assets/icons/icon-book.png';
import money from '../../../../assets/icons/icon-money-hand.png';
import variety from '../../../../assets/icons/icon-variety.png';

function Benefits() {
    return(
        <div className={styles.container}>
            <h1>Por que ter uma biblioteca personalizada?</h1>
            <Row alignItems="flex-start">
                <div className={styles.item}>
                    <img src={book} alt="Ícone Livros Selecionados" draggable="false" />
                    <h2>Livros Selecionados</h2>
                    <p>Seleção de livros adequados aos seus interesses e necessidades</p>
                </div>
                <div className={styles.item}>
                    <img src={money} alt="Ícone Economia de tempo e dinheiro" draggable="false" />
                    <h2>Economia de tempo e dinheiro</h2>
                    <p>Você receberá uma seleção de livros específicos ao interesse do seu pequeno, com os links já direcionados para compras nas melhores livrarias on-line. </p>
                </div>
                <div className={styles.item}>
                    <img src={variety} alt="Ícone variedade de gênero"  draggable="false"/>
                    <h2>Variedade de gêneros</h2>
                    <p>Uma grande variedade de gêneros literários, permitindo que você experimente novos tipos de leitura e expanda seus horizontes.</p>
                </div>
            </Row>
        </div>
    )
}

export default Benefits;
