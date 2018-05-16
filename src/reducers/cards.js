const swapClientCard = (state, { card, clientId }) => {
  const nextState = { ...state };

  delete nextState[clientId];
  nextState[card.id] = card;

  return nextState;
};

const cards = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCEEDED':
      return action.payload.cards.reduce(
        (p, card) => ({ ...p, [card.id]: card }),
        {}
      );
    case 'CARD_UPDATED':
    case 'CARD_SAVE_SUCCEEDED':
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case 'CARD_CREATED':
      return {
        ...state,
        [action.payload.clientId]: action.payload.card
      };
    case 'CARD_CREATE_SUCCEEDED':
      return swapClientCard(state, action.payload);
    default:
      return state;
  }
};

export default cards;
