const swapClientCard = (state, { card }) => {
  if (!card.clientId) {
    return state;
  }

  const nextState = { ...state };
  delete nextState[card.clientId];

  const updatedCard = { ...card };
  delete updatedCard.clientId;

  nextState[updatedCard.id] = updatedCard;

  return nextState;
};

const deleteCard = (state, { card }) => {
  const nextState = { ...state };

  delete nextState[card.id];

  return nextState;
};

const cards = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCEEDED':
      return action.payload.cards.reduce(
        (p, card) => ({ ...p, [card.id]: card }),
        {}
      );
    case 'CARD_SAVE_STARTED':
      return {
        ...state,
        [action.payload.card.id]: action.payload.card
      };
    case 'CARD_SAVE_SUCCEEDED':
      return swapClientCard(state, action.payload);
    case 'CARD_DESTROY_STARTED':
      return deleteCard(state, action.payload);
    default:
      return state;
  }
};

export default cards;
