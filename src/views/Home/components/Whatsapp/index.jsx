import React from 'react';
import styles from './styles.module.scss';
import logo from '/public/assets/icons/icons-whatsapp.png';

function Whatsapp() {
    return(
        <div className={styles.container} onClick={() => window.open('https://wa.me/555193114413?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20a%20Biblioteca%20Leiturica', '_blank').focus()}>
            <img src={logo} alt="Logo Whatsapp" draggable="false" />
            <p>Fale Conosco</p>
        </div>
    )
}

export default Whatsapp;
