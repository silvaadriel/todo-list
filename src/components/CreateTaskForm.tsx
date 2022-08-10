import { ChangeEvent, FormEvent } from 'react';

import { ReactComponent as PlusIcon } from '../assets/plus-icon.svg';

import styles from './CreateTaskForm.module.css';

interface CreateTaskFormProps {
  newTaskTitle: string;
  onChangeNewTaskTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function CreateTaskForm({
  newTaskTitle,
  onChangeNewTaskTitle,
  onSubmit,
}: CreateTaskFormProps) {
  const isNewTaskTitleEmpty = newTaskTitle.trim().length === 0;

  return (
    <form className={styles.newTaskForm} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskTitle}
        onChange={onChangeNewTaskTitle}
      />
      <button type="submit" disabled={isNewTaskTitleEmpty}>
        Criar
        <PlusIcon />
      </button>
    </form>
  );
}
