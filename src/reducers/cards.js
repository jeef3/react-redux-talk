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
    case 'CARD_SAVE_FAILED':
      return state;
    default:
      return state;
  }
};

export default cards;
