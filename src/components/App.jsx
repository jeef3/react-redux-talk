import React from 'react';

import AppLayout from './templates/AppLayout';
import Header from './molecules/Header';
import ListsContainer from './ListsContainer';

const App = () => (
  <AppLayout
    renderHeader={() => <Header />}
    renderLists={() => <ListsContainer />}
  />
);

export default App;
