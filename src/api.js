const url = 'http://localhost:3001';
const headers = { 'Content-Type': 'application/json' };

const handleRes = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

export const listOrder = async () => fetch(`${url}/listOrder`).then(handleRes);
export const lists = async () => fetch(`${url}/lists`).then(handleRes);
export const cards = async () => fetch(`${url}/cards`).then(handleRes);

export const updateList = async list =>
  fetch(`${url}/lists/${list.id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(list)
  }).then(handleRes);

export const createList = async list =>
  fetch(`${url}/lists/`, {
    headers,
    method: 'POST',
    body: JSON.stringify(list)
  }).then(handleRes);

export const updateCard = async card =>
  fetch(`${url}/cards/${card.id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(card)
  }).then(handleRes);

export const createCard = async card =>
  fetch(`${url}/cards/`, {
    headers,
    method: 'POST',
    body: JSON.stringify(card)
  }).then(handleRes);

export const reorderLists = async order =>
  fetch(`${url}/listOrder`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(order)
  }).then(handleRes);
