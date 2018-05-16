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

export function* handleUpdateList(action) {
  const list = action.payload;

  yield put({ type: 'LIST_UPDATED', payload: list });

  try {
    const savedList = yield call(Api.updateList, list);
    yield put({ type: 'LIST_SAVE_SUCCEEDED', payload: savedList });
  } catch (error) {
    yield put({ type: 'LIST_SAVE_FAILED', error });
  }
}

export function* handleUpdateCard(action) {
  const card = action.payload;

  yield put({ type: 'CARD_UPDATED', payload: card });

  try {
    const savedCard = yield call(Api.updateCard, card);
    yield put({ type: 'CARD_SAVE_SUCCEEDED', payload: savedCard });
  } catch (error) {
    yield put({ type: 'CARD_SAVE_FAILED', error });
  }
}

export function* saga() {
  yield takeLatest('LOAD_DATA_REQUESTED', handleLoadDataRequested);

  yield takeLatest('UPDATE_LIST', handleUpdateList);
  yield takeLatest('UPDATE_CARD', handleUpdateCard);
}
