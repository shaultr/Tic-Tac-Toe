import styles from './style.module.scss'
import { RiArrowGoBackLine } from "react-icons/ri";

export default function BackButton() {
  return (
    <div className={styles.container}>
      <RiArrowGoBackLine />
    </div>
  )
}
