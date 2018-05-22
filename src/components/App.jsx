import React from 'react';

import AppLayout from './templates/AppLayout';
import Board from './organisms/Board';
import TopBar from './organisms/TopBar';

const App = () => (
  <AppLayout renderHeader={() => <TopBar />} renderBoard={() => <Board />} />
);

export default App;
