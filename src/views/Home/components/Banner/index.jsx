import React from 'react';
import styles from './styles.module.scss';
import logo from '/public/assets/logo-leiturica.png';
import arrow from '/public/assets/icons/icon-arrow-down.png';

function Banner() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="" draggable="false" />
            <p>Você deseja <b>incentivar</b> seus filhos a se tornarem <b>leitores</b>, mas não sabe por onde <b>começar</b>?</p>
            <p><b>A <b>Biblioteca Personalizada</b> pode te ajudar!</b></p>
            <img src={arrow} alt="" className={styles.arrow} draggable="false" />
        </div>
    )
}

export default Banner;
