export const create = ({ card, listId }) => ({
  type: 'CARD_CREATE_REQUESTED',
  payload: { card, listId }
});

export const update = ({ card }) => ({
  type: 'CARD_UPDATE_REQUESTED',
  payload: { card }
});

export const destroy = ({ card }) => ({
  type: 'CARD_DESTROY_REQUESTED',
  payload: { card }
});

export const saveStarted = ({ card, listId }) => ({
  type: 'CARD_SAVE_STARTED',
  payload: { card, listId }
});

export const saveSucceeded = ({ card, listId }) => ({
  type: 'CARD_SAVE_SUCCEEDED',
  payload: { card, listId }
});

export const saveFailed = ({ card, listId, error }) => ({
  type: 'CARD_SAVE_FAILED',
  payload: { card, listId, error }
});

export const destroyStarted = ({ card }) => ({
  type: 'CARD_DESTROY_STARTED',
  payload: { card }
});

export const destroySucceeded = ({ card }) => ({
  type: 'CARD_DESTROY_SUCCEEDED',
  payload: { card }
});

export const destroyFailed = ({ card, error }) => ({
  type: 'CARD_DESTROY_FAILED',
  payload: { card, error }
});
