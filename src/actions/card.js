export const updateCard = card => ({
  type: 'CARD_UPDATE_REQUESTED',
  payload: card
});

export const createCard = (card, listId) => ({
  type: 'CARD_CREATE_REQUESTED',
  payload: { card, listId }
});

export const deleteCard = card => ({
  type: 'CARD_DELETE_REQUESTED',
  payload: card
});
