import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Common as CommonActions } from './actions';
import App from './components/App';
import rootReducer from './reducers';
import { saga } from './sagas';
import './base.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

// Must be after Sagas have started
store.dispatch(CommonActions.loadData());

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
