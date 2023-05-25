import React from 'react';
import styles from './styles.module.scss';

function Button({text, onClick}) {
    return(
        <div className={styles.container} onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;
