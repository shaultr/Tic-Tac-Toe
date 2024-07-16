import styles from './style.module.scss';

export default function Square({ mode, index, click }) {

  const thisColor = (mode === "empty" ||  mode === "x" ||  mode === "o" || mode === "winner") ? "rgba(201, 249, 252, 1)":
  "rgba(209, 209, 209, 1)"
  return (
    <div>
      <div className={styles.container} style={{ backgroundColor: thisColor }} onClick={() => click(index)}>
        {mode === 'x' && <img src='x.svg' width="70%" />}
        {mode === 'o' &&  <img src='o.svg' width="70%" />}
        {mode === 'endGameX' &&  <img src='x-gray.svg' width="70%" />}
        {mode === 'endGameO' &&  <img src='o-gray.svg' width="70%" />}
        
        {mode === 'chooseX' &&  <img src='x-gray.svg' width="70%" />}
        {mode === '!chooseO' &&  <img src='o.svg' width="85%" />}

        {mode === 'chooseO' &&  <img src='o-gray.svg' width="70%" />}
        {mode === '!chooseX' &&  <img src='x.svg' width="85%" />}
      </div>
    </div>
  )
}
