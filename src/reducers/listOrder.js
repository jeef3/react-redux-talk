const listOrder = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA_RECEIVED':
      return action.payload.listOrder;
    default:
      return state;
  }
};

export default listOrder;
