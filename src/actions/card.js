export const updateCard = card => ({
  type: 'CARD_UPDATE_REQUESTED',
  payload: card
});

export const createCard = card => ({
  type: 'CARD_CREATE_REQUESTED',
  payload: card
});
