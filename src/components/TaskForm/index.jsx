import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../../redux/actions/tasks';
import styles from './TaskForm.module.scss';

const initialState = {
  title: '',
  description: '',
  completed: false,
};

const TaskForm = () => {
  const checkBoxClass = clsx(styles.form_group, styles.checkbox);

  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title) return;
    const newTask = { ...values, id: new Date().getTime() };

    dispatch(addTaskAction(newTask));
    setValues(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' value={values.title} name='title' onChange={handleChange} />
        </div>
        <div className={styles.form_group}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={values.description}
            name='description'
            onChange={handleChange}
          />
        </div>
        <div className={checkBoxClass}>
          <label htmlFor='completed'>Completed</label>
          <input
            checked={values.completed}
            type='checkbox'
            id='completed'
            onChange={() =>
              handleChange({ target: { name: 'completed', value: !values.completed } })
            }
          />
        </div>

        <div className={styles.btn_wrapper}>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
