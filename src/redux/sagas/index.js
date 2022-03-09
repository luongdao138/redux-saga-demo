import { all } from 'redux-saga/effects';
import taskSaga from './tasks';

function* rootSaga() {
  yield all([taskSaga()]);
}

export default rootSaga;
