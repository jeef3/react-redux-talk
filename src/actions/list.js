export const update = ({ list }) => ({
  type: 'LIST_UPDATE_REQUESTED',
  payload: { list }
});

export const create = ({ list }) => ({
  type: 'LIST_CREATE_REQUESTED',
  payload: { list }
});

export const destroy = ({ list }) => ({
  type: 'LIST_DESTROY_REQUESTED',
  payload: { list }
});

export const reorder = ({ listOrder }) => ({
  type: 'LIST_REORDER_REQUESTED',
  payload: { listOrder }
});

export const updated = ({ list }) => ({
  type: 'LIST_UPDATED',
  payload: { list }
});

export const saveStarted = ({ list }) => ({
  type: 'LIST_SAVE_STARTED',
  payload: { list }
});

export const saveSucceeded = ({ list }) => ({
  type: 'LIST_SAVE_SUCCEEDED',
  payload: { list }
});

export const saveFailed = ({ list }) => ({
  type: 'LIST_SAVE_FAILED',
  payload: { list }
});

export const destroyStarted = ({ list }) => ({
  type: 'LIST_DESTROY_STARTED',
  payload: { list }
});

export const destroySucceeded = ({ list }) => ({
  type: 'LIST_DESTROY_SUCCEEDED',
  payload: { list }
});

export const destroyFailed = ({ list, error }) => ({
  type: 'LIST_DESTROY_FAILED',
  payload: { list, error }
});
