import styles from './style.module.scss'
import React from 'react'

export default function Button({text}) {
  return (
    <div className={styles.container}>
      {text}
    </div>
  )
}
