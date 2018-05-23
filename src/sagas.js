import { call, put, select, takeLatest } from 'redux-saga/effects';
import uuid from 'uuid';

import * as Api from './api';
import { Common, Card, List } from './actions';

export function* updateList(list) {
  yield put(List.saveStarted({ list }));
  yield put(List.updated({ list }));

  try {
    const savedList = yield call(Api.updateList, list);
    yield put(List.saveSucceeded({ list: savedList }));
  } catch (error) {
    yield put(List.saveFailed({ list, error }));
  }
}

export function* addCardToList(card, listId) {
  const list = yield select(state => state.lists[listId]);

  const existingId = list.cards.indexOf(card.id);

  if (existingId !== -1) {
    return;
  }

  const updatedList = {
    ...list,
    cards: list.cards.concat(card.id)
  };

  yield put(List.updated({ list: updatedList }));
}

export function* handleDataLoadRequested() {
  yield put(Common.loadDataStarted());

  try {
    const listOrder = yield call(Api.listOrder);
    const lists = yield call(Api.lists);
    const cards = yield call(Api.cards);

    yield put(Common.loadDataSucceeded({ listOrder, lists, cards }));
  } catch (error) {
    yield put(Common.loadDataFailed({ error }));
  }
}

export function* handleListUpdateRequested(action) {
  const { list } = action.payload;

  // Strip card data out, only send ids
  const listToSave = {
    ...list,
    cards: list.cards.map(card => card.id)
  };

  yield call(updateList, listToSave);
}

export function* handleListCreateRequested(action) {
  const { list } = action.payload;

  const listToSave = {
    ...list,
    cards: []
  };

  yield put(List.saveStarted({ list: listToSave }));

  try {
    const savedList = yield call(Api.createList, listToSave);
    yield put(List.saveSucceeded({ list: savedList }));
  } catch (error) {
    yield put(List.saveFailed({ list: listToSave, error }));
  }
}

export function* handleListDestoryRequested(action) {
  const { list } = action.payload;

  yield put(List.destroyStarted({ list }));

  try {
    yield call(Api.deleteList, list);
    yield put(List.destroySucceeded({ list }));
  } catch (error) {
    yield put(List.destroyFailed({ list }));
  }
}

export function* handleCardUpdateRequested(action) {
  const { card } = action.payload;

  yield put(Card.saveStarted({ card }));

  try {
    const savedCard = yield call(Api.updateCard, card);
    yield put(Card.saveSucceeded({ card: savedCard }));
  } catch (error) {
    yield put(Card.saveFailed({ card, error }));
  }
}

export function* handleCardCreateRequested(action) {
  const { card, listId } = action.payload;

  const clientId = uuid();
  const newCard = {
    ...card,
    id: clientId,
    clientId
  };

  if (!card.title) {
    yield put(Card.saveFailed({ card: newCard, listId, error: 'Empty title' }));

    return;
  }

  yield put(Card.saveStarted({ card: newCard, listId }));
  yield call(addCardToList, newCard, listId);

  try {
    const savedCard = yield call(Api.createCard, card);

    yield put(Card.saveSucceeded({ card: { ...savedCard, clientId }, listId }));

    const list = yield select(state => state.lists[listId]);
    yield call(updateList, list);
  } catch (error) {
    yield put(Card.saveFailed({ card: newCard, listId, error }));
  }
}

export function* handleCardDestroyRequested(action) {
  const { card } = action.payload;

  // Remove the card from its list
  const updatedList = yield select(state => {
    // Find the list that has this card
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

  yield put(Card.destroyStarted({ card }));

  try {
    yield call(Api.deleteCard, card);
    yield put(Card.destroySucceeded({ card }));
  } catch (error) {
    yield put(Card.destroyFailed({ card, error }));
  }
}

export function* saga() {
  yield takeLatest('DATA_LOAD_REQUESTED', handleDataLoadRequested);

  yield takeLatest('LIST_CREATE_REQUESTED', handleListCreateRequested);
  yield takeLatest('LIST_UPDATE_REQUESTED', handleListUpdateRequested);
  yield takeLatest('LIST_DESTROY_REQUESTED', handleListDestoryRequested);

  yield takeLatest('CARD_CREATE_REQUESTED', handleCardCreateRequested);
  yield takeLatest('CARD_UPDATE_REQUESTED', handleCardUpdateRequested);
  yield takeLatest('CARD_DESTROY_REQUESTED', handleCardDestroyRequested);
}
