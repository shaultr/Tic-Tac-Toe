import styles from './style.module.scss'

export default function ContentFrame({content}) {
    
    
    return (
        <div className={styles.container}>
         {content}
        </div>
    )
}
