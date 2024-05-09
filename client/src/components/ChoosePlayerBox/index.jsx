import styles from './style.module.scss'
import Square from '../Square';
import { useState } from 'react';

export default function BoardGame({chooseX, chooseO, handleClickX, handleClickO}) {

    return (
        <div className={styles.container}>
            <Square click={handleClickX} mode={chooseX} />
            <Square click={handleClickO} mode={chooseO} />

        </div>
    )
}
