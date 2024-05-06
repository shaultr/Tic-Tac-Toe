import styles from './style.module.scss'

export default function CircleImg() {
    return (
        <>
        <div className={styles.container}>
            <img src='avatar.svg' width="100%" />
        </div>
        <div className={styles.win}>
            <div className={styles.char}>
            <img src='x.svg' width="40px" />
            </div>
            Wine: 13
        </div>
        </>
    )
}
