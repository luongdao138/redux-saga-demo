import styles from './TaskItem.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { ImBin } from 'react-icons/im';

import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, toggleTaskAction } from '../../redux/actions/tasks';

const TaskItem = ({ task }) => {
  const titleClass = clsx({ [styles.title]: true, [styles.completed]: task.completed });
  const dispatch = useDispatch();

  const handleToggleTask = (id) => {
    dispatch(toggleTaskAction(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {task.completed ? (
          <FaCheckCircle onClick={() => handleToggleTask(task.id)} />
        ) : (
          <MdRadioButtonUnchecked
            style={{ fontSize: '1.4rem' }}
            onClick={() => handleToggleTask(task.id)}
          />
        )}
        <p className={titleClass}>{task.title}</p>
      </div>
      <div className={styles.right}>
        <ImBin onClick={() => handleDeleteTask(task.id)} />
      </div>
    </div>
  );
};

export default TaskItem;
