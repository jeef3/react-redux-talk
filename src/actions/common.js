export const loadData = () => ({
  type: 'DATA_LOAD_REQUESTED'
});

export const loadDataStarted = () => ({
  type: 'DATA_LOAD_STARTED'
});

export const loadDataSucceeded = ({ listOrder, lists, cards }) => ({
  type: 'DATA_LOAD_SUCCEEDED',
  payload: { listOrder, lists, cards }
});

export const loadDataFailed = ({ error }) => ({
  type: 'DATA_LOAD_FAILED',
  payload: { error }
});
