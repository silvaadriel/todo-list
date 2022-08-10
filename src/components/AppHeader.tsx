import todoLogo from '../assets/todo-logo.svg';

import styles from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo List Logo" />
    </header>
  );
}
