export const updateList = list => ({
  type: 'LIST_UPDATE_REQUESTED',
  payload: list
});

export const createList = list => ({
  type: 'LIST_CREATE_REQUESTED',
  payload: list
});

export const reorderList = listOrder => ({
  type: 'LIST_REORDER_REQUESTED',
  payload: listOrder
});
