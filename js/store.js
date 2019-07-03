/* eslint-disable global-require */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';
// import { routerEnhancer, routerMiddleware } from './router';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;