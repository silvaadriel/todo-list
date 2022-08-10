import { Task } from '../App';

import styles from './TaskListInfoHeader.module.css';

interface TaskListInfoHeaderProps {
  tasks: Task[];
}

export function TaskListInfoHeader({ tasks }: TaskListInfoHeaderProps) {
  function getSummaryString() {
    const completedTasks = tasks.filter((task) => task.isCompleted);

    return tasks.length ? `${completedTasks.length} de ${tasks.length}` : '0';
  }

  return (
    <header className={styles.header}>
      <div>
        <strong className={styles.createdTasks}>Tarefas criadas</strong>
        <span>{tasks.length}</span>
      </div>

      <div>
        <strong className={styles.completedTasks}>Concluídas</strong>
        <span>{getSummaryString()}</span>
      </div>
    </header>
  );
}
