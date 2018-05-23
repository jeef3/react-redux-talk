const initialState = {
  data: true
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LOAD_STARTED':
      return {
        ...state,
        data: true
      };
    case 'DATA_LOAD_SUCCEEDED':
      return {
        ...state,
        data: false
      };
    default:
      return state;
  }
};

export default loading;
