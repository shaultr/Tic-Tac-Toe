import styles from './style.module.scss'

export default function CircleImg({ choosePlayer, player }) {
    const myWidth = player == choosePlayer ? "110px" : "100px";
    const myBorder = player == choosePlayer ?  "4px solid rgba(142, 235, 255, 1)": "4px solid #B28100";

    return (
        <>
            <div className={styles.container} style={{ width: myWidth, border: myBorder }}>
                <img src='avatar.svg' width="100%" />
            </div>
            <div className={styles.win}>
                <div className={styles.char}>
                    <img src='x.svg' width="40px" />
                </div>
                Wins: 13
            </div>
        </>
    )
}
