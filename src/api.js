const url = 'http://localhost:3001';
const headers = { 'Content-Type': 'application/json' };

export const listOrder = async () =>
  fetch(`${url}/listOrder`).then(res => res.json());
export const lists = async () => fetch(`${url}/lists`).then(res => res.json());
export const cards = async () => fetch(`${url}/cards`).then(res => res.json());

export const updateList = async list =>
  fetch(`${url}/lists/${list.id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(list)
  }).then(res => res.json());

export const updateCard = async card =>
  fetch(`${url}/cards/${card.id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(card)
  }).then(res => res.json());
