import styles from './TaskItem.module.css'

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`${task.text} を${task.completed ? '未完了' : '完了'}にする`}
        />
        <span className={styles.text}>{task.text}</span>
      </label>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
        aria-label={`${task.text} を削除する`}
      >
        ✕
      </button>
    </li>
  )
}
