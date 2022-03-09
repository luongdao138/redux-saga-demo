import TaskForm from './components/TaskForm';
import TaskLists from './components/TaskList';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <TaskForm />
      <TaskLists />
    </div>
  );
};

export default App;
