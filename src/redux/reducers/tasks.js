import * as types from '../actionTypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TASKS_LOADED:
      return { ...state, tasks: payload };
    case types.TASK_ADDED:
      const addedTasks = [...state.tasks, payload];
      localStorage.setItem('tasks', JSON.stringify(addedTasks));
      return { ...state, tasks: [...state.tasks, payload] };
    case types.TASK_TOGGLED:
      let newTasks = state.tasks.map((task) => {
        if (task.id === payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };
    case types.TASK_DELETED:
      let newTasks2 = state.tasks.filter((task) => task.id !== payload);
      localStorage.setItem('tasks', JSON.stringify(newTasks2));
      return { ...state, tasks: newTasks2 };
    case types.SEARCH_TASKS_SUCCESS:
      const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      let newTasks3 = allTasks.filter(
        (task) => task.title.toLowerCase().indexOf(payload?.toLowerCase()) !== -1
      );
      return { ...state, tasks: newTasks3 };

    default:
      return state;
  }
};

export default taskReducer;
