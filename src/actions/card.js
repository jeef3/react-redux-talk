export const updateCard = card => ({
  type: 'CARD_UPDATE_REQUESTED',
  payload: card
});

export const createCard = (card, listId) => ({
  type: 'CARD_CREATE_REQUESTED',
  payload: { card, listId }
});
