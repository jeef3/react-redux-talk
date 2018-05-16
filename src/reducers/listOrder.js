const listOrder = (state = [], action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCEEDED':
      return action.payload.listOrder;
    default:
      return state;
  }
};

export default listOrder;
