import { useState } from 'react'
import styles from './TaskInput.module.css'

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力してください"
        aria-label="新しいタスク"
      />
      <button className={styles.button} type="submit">
        追加
      </button>
    </form>
  )
}
