import { ReactComponent as ClipboardIcon } from '../assets/clipboard-icon.svg';

import styles from './EmptyList.module.css';

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <ClipboardIcon />

      <div>
        <p>
          <b>Você ainda não tem tarefas cadastradas</b>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
