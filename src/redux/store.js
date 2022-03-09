import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const myLoggerMiddleware = (store) => (next) => (action) => {
  console.log('First middleware run, ', action);
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  console.log('Second middleware run', action);
  return next(action);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, myLoggerMiddleware, secondMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
