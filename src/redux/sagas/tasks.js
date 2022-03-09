import { all, takeEvery, debounce, call, put } from 'redux-saga/effects';
import * as types from '../actionTypes';
import * as services from '../../services/tasks';
import * as actions from '../actions/tasks';

// worker sagas
function* loadTasks() {
  const tasks = yield call(services.getAllTasks);
  yield put(actions.tasksLoadedAction(tasks));
}

function* addTask({ payload }) {
  const task = yield call(services.addTask, payload);
  yield put(actions.taskAddedAction(task));
}

function* toggleTask({ payload }) {
  yield put(actions.taskToggledAction(payload));
}

function* deleteTask({ payload }) {
  yield call(services.deleteTask, payload);
  yield put(actions.taskDeletedAction(payload));
}

function* searchTasks({ payload }) {
  yield call(services.searchTasks, payload);
  yield put(actions.searchTaskSuccessAction(payload));
}

// watchers sagas
function* watchLoadTasks() {
  yield takeEvery(types.LOAD_TASKS, loadTasks);
}

function* watchAddTask() {
  yield takeEvery(types.ADD_TASK, addTask);
}

function* watchToggleTask() {
  yield takeEvery(types.TOGGLE_TASK, toggleTask);
}

function* watchDeleteTask() {
  yield takeEvery(types.DELETE_TASK, deleteTask);
}

function* watchSearchTask() {
  yield debounce(500, types.SEARCH_TASKS, searchTasks);
}

function* taskSaga() {
  yield all([
    watchLoadTasks(),
    watchAddTask(),
    watchToggleTask(),
    watchDeleteTask(),
    watchSearchTask(),
  ]);
}

export default taskSaga;
