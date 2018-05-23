import { call, put, select, takeLatest } from 'redux-saga/effects';
import uuid from 'uuid';

import * as Api from './api';
import { Common } from './actions';

export function* updateList(list) {
  yield put({ type: 'LIST_UPDATED', payload: list });

  try {
    const savedList = yield call(Api.updateList, list);
    yield put({ type: 'LIST_SAVE_SUCCEEDED', payload: savedList });
  } catch (error) {
    yield put({ type: 'LIST_SAVE_FAILED', error });
  }
}

export function* handleDataLoadRequested() {
  yield put(Common.loadDataStarted());

  try {
    const listOrder = yield call(Api.listOrder);
    const lists = yield call(Api.lists);
    const cards = yield call(Api.cards);

    yield put(Common.loadDataSucceeded({ listOrder, lists, cards }));
  } catch (error) {
    yield put({ type: 'DATA_LOAD_FAILED', error });
  }
}

export function* handleListUpdateRequested(action) {
  const list = action.payload;

  // Strip card data out, only send ids
  const listToSave = {
    ...list,
    cards: list.cards.map(card => card.id)
  };

  yield call(updateList, listToSave);
}

export function* handleListCreateRequested(action) {
  const list = action.payload;

  const listToSave = {
    ...list,
    cards: []
  };

  yield put({ type: 'LIST_CREATED', payload: listToSave });

  try {
    const savedList = yield call(Api.createList, listToSave);
    yield put({ type: 'LIST_CREATE_SUCCEEDED', payload: savedList });
  } catch (error) {
    console.warn(error);
    yield put({ type: 'LIST_CREATE_FAILED', error });
  }
}

export function* handleListDeleteRequested(action) {
  const list = action.payload;

  yield put({ type: 'LIST_DELETED', payload: list });

  try {
    yield call(Api.deleteList, list);
    yield put({ type: 'LIST_DELETE_SUCCEEDED', payload: list });
  } catch (error) {
    console.warn(error);
    yield put({ type: 'LIST_DELETE_FAILED', error });
  }
}

export function* handleCardUpdateRequested(action) {
  const card = action.payload;

  yield put({ type: 'CARD_UPDATED', payload: card });

  try {
    const savedCard = yield call(Api.updateCard, card);
    yield put({ type: 'CARD_SAVE_SUCCEEDED', payload: savedCard });
  } catch (error) {
    console.warn(error);
    yield put({ type: 'CARD_SAVE_FAILED', error });
  }
}

export function* handleCardCreateRequested(action) {
  const { card, listId } = action.payload;

  if (!card.title) {
    yield put({ type: 'CARD_CREATE_FAILED', error: 'Empty title' });
    return;
  }

  const clientId = uuid();

  yield put({ type: 'CARD_CREATED', payload: { ...card, id: clientId } });

  let savedCard;

  try {
    savedCard = yield call(Api.createCard, card);

    yield put({
      type: 'CARD_CREATE_SUCCEEDED',
      payload: {
        card: savedCard,
        clientId,
        listId
      }
    });
  } catch (error) {
    console.warn(error);
    yield put({ type: 'CARD_CREATE_FAILED', error });
  }

  // Add the card to the list
  const list = yield select(state => state.lists[listId]);
  const updatedList = {
    ...list,
    cards: list.cards.concat(savedCard.id)
  };

  yield call(updateList, updatedList);
}

export function* handleCardDeleteRequested(action) {
  const card = action.payload;

  // Remove the card from its list
  const updatedList = yield select(state => {
    const listId = Object.keys(state.lists).find(
      key => state.lists[key].cards.indexOf(card.id) !== -1
    );

    const list = state.lists[listId];

    return {
      ...list,
      cards: list.cards.filter(id => id !== card.id)
    };
  });

  yield call(updateList, updatedList);

  yield put({ type: 'CARD_DELETED', payload: card });

  try {
    yield call(Api.deleteCard, card);
    yield put({ type: 'CARD_DELETE_SUCCEEDED', payload: card });
  } catch (error) {
    console.warn(error);
    yield put({ type: 'CARD_DELETE_FAILED', error });
  }
}

export function* saga() {
  yield takeLatest('DATA_LOAD_REQUESTED', handleDataLoadRequested);

  yield takeLatest('LIST_UPDATE_REQUESTED', handleListUpdateRequested);
  yield takeLatest('LIST_CREATE_REQUESTED', handleListCreateRequested);
  yield takeLatest('LIST_DELETE_REQUESTED', handleListDeleteRequested);

  yield takeLatest('CARD_UPDATE_REQUESTED', handleCardUpdateRequested);
  yield takeLatest('CARD_CREATE_REQUESTED', handleCardCreateRequested);
  yield takeLatest('CARD_DELETE_REQUESTED', handleCardDeleteRequested);
}
