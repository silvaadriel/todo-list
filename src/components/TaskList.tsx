import { Task } from '../App';

import { ReactComponent as TrashIcon } from '../assets/trash-icon.svg';

import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <ul className={styles.tasksList}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.isCompleted ? styles.completedTask : undefined}
        >
          <input
            type="checkbox"
            title="Marcar como completada"
            checked={task.isCompleted}
            id={`checkbox-${task.id}`}
            onChange={() => onToggleTask(task.id)}
          />
          <label htmlFor={`checkbox-${task.id}`}>{task.title}</label>
          <button
            title="Deletar tarefa"
            type="button"
            onClick={() => onDeleteTask(task.id)}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
