const lists = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_DATA_RECEIVED':
      return action.payload.lists.reduce(
        (p, list) => ({ ...p, [list.id]: list }),
        {}
      );
    case 'LIST_UPDATED':
    case 'LIST_SAVE_SUCCEEDED':
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};

export default lists;
