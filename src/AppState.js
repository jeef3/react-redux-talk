import React from 'react';

const AppContext = React.createContext({
  lists: [],
  cards: [],
  listOrder: []
});

export default AppContext;
