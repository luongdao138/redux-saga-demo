import * as types from '../actionTypes';

export const addTaskAction = (payload) => ({
  type: types.ADD_TASK,
  payload,
});

export const taskAddedAction = (payload) => ({
  type: types.TASK_ADDED,
  payload,
});

export const deleteTaskAction = (id) => ({
  type: types.DELETE_TASK,
  payload: id,
});

export const taskDeletedAction = (id) => ({
  type: types.TASK_DELETED,
  payload: id,
});

export const loadTaskAction = () => ({
  type: types.LOAD_TASKS,
});

export const tasksLoadedAction = (tasks) => ({
  type: types.TASKS_LOADED,
  payload: tasks,
});

export const toggleTaskAction = (id) => ({
  type: types.TOGGLE_TASK,
  payload: id,
});

export const taskToggledAction = (id) => ({
  type: types.TASK_TOGGLED,
  payload: id,
});

export const searchTaskAction = (searchTerm) => ({
  type: types.SEARCH_TASKS,
  payload: searchTerm,
});

export const searchTaskSuccessAction = (searchTerm) => ({
  type: types.SEARCH_TASKS_SUCCESS,
  payload: searchTerm,
});
