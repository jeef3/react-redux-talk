import React from 'react';
import styled from 'styled-components';

import Board from './organisms/Board';
import TopBar from './organisms/TopBar';

const Container = styled.div`
  height: 100vh;

  background: #4f5d75;

  display: grid;
  grid-template-rows: 50px 1fr;
`;
Container.displayName = 'Container';

const App = ({ lists, cards, listOrder }) => (
  <Container>
    <TopBar />
    <Board lists={lists} cards={cards} listOrder={listOrder} />
  </Container>
);

export default App;
