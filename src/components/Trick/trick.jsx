import React from 'react';
import styles from './trick.module.scss'



const Trick = ({ lan = 'es', slide, page }) => {
    if (lan === 'es') {
        return <h2 className={styles.hidden}>Página web del actor Alex Peracaula</h2>
    } else if (lan === 'en') {
        return <h2 className={styles.hidden}>Website of actor Alex Peracaula</h2>
    }
    return <h2 className={styles.hidden}>Pàgina web de l'actor Alex Peracaula</h2>
}

export default Trick