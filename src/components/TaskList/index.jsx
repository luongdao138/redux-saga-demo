import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTaskAction, searchTaskAction } from '../../redux/actions/tasks';
import TaskItem from '../TaskItem';
import styles from './TaskList.module.scss';

const TaskLists = () => {
  const { tasks } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchTaskAction(e.target.value));
  };

  useEffect(() => {
    dispatch(loadTaskAction());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search todo...'
        className={styles.search_input}
      />
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskLists;
