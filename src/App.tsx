import { ChangeEvent, FormEvent, useState } from 'react';

import { AppHeader } from './components/AppHeader';
import { CreateTaskForm } from './components/CreateTaskForm';
import { TaskListInfoHeader } from './components/TaskListInfoHeader';
import { EmptyList } from './components/EmptyList';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

import './global.css';

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleChangeNewTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTask(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }

        return task;
      })
    );
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <AppHeader />

      <div className={styles.wrapper}>
        <main>
          <CreateTaskForm
            newTaskTitle={newTaskTitle}
            onChangeNewTaskTitle={handleChangeNewTaskTitle}
            onSubmit={handleCreateTask}
          />

          <div className={styles.tasksContainer}>
            <TaskListInfoHeader tasks={tasks} />

            {tasks.length > 0 ? (
              <TaskList
                onDeleteTask={handleDeleteTask}
                onToggleTask={handleToggleTask}
                tasks={tasks}
              />
            ) : (
              <EmptyList />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
