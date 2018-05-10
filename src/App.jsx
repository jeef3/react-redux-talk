import React from 'react';
import styled from 'styled-components';

import ListContainer from './ListContainer';
import List from './List';

const Container = styled.div`
  height: 100vh;

  background: #4f5d75;

  display: grid;
  grid-template-rows: 50px 1fr;
`;
Container.displayName = 'Container';

export default () => (
  <Container>
    <div
      style={{
        color: '#2D3142',
        background: '#EC5766'
      }}
    >
      App Header
    </div>

    <ListContainer>
      {lists.map(list => <List title={list.name} cards={list.cards} />)}
      <List />
    </ListContainer>
  </Container>
);
