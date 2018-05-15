const lists = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_DATA_RECEIVED':
      return action.payload.lists.reduce(
        (p, list) => ({ ...p, [list.id]: list }),
        {}
      );
    default:
      return state;
  }
};

export default lists;
