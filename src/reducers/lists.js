const lists = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_DATA_RECEIVED':
      return action.payload.lists;
    default:
      return state;
  }
};

export default lists;
