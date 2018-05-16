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
        [action.payload.id]: {
          ...action.payload

        }
      };
    case 'CARD_CREATED':
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          cards: 
        }
      }
    case 'CARD_CREATE_SUCCEEDED':
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default lists;
