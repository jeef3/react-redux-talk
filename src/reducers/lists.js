const swapClientCard = (state, { card, listId }) => {
  if (!card.clientId) {
    return state;
  }

  const currentList = state[listId];
  const replaceIndex = currentList.cards.indexOf(card.clientId);
  const newCardList = currentList.cards.slice(0);
  newCardList[replaceIndex] = card.id;

  return {
    ...state,
    [listId]: {
      ...currentList,
      cards: newCardList
    }
  };
};

const lists = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCEEDED':
      return action.payload.lists.reduce(
        (p, list) => ({ ...p, [list.id]: list }),
        {}
      );
    case 'LIST_UPDATED':
    case 'LIST_SAVE_SUCCEEDED':
      return {
        ...state,
        [action.payload.list.id]: action.payload.list
      };
    case 'CARD_SAVE_SUCCEEDED':
      return swapClientCard(state, action.payload);
    default:
      return state;
  }
};

export default lists;
