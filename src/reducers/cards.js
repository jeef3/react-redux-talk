const cards = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_DATA_RECEIVED':
      return action.payload.cards;
    default:
      return state;
  }
};

export default cards;
