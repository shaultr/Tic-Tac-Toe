import styles from './style.module.scss'

export default function CircleImg() {
    return (
        <>
        <div className={styles.container}>
            <img src='avatar.svg' width="100px" />
        </div>
        <div className={styles.win}>
            <div className={styles.char}>
            <img src='o.svg' width="40px" />
            </div>
            Wine: 13
        </div>
        </>
    )
}
