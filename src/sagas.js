import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from './api';

export function* handleLoadDataRequested() {
  const listOrder = yield call(Api.listOrder);
  const lists = yield call(Api.lists);
  const cards = yield call(Api.cards);

  yield put({
    type: 'LOAD_DATA_RECEIVED',
    payload: { listOrder, lists, cards }
  });
}

export function* saga() {
  yield takeLatest('LOAD_DATA_REQUESTED', handleLoadDataRequested);
}
