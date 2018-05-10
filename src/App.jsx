import React from 'react';
import styled from 'styled-components';

import ScrollContainer from './ScrollContainer';
import Card from './Card';
import ListContainer from './ListContainer';
import List from './List';

const lists = [
  {
    name: 'TODO',
    cards: [
      { title: 'First card' },
      { title: 'Second card' },
      { title: 'Third card' },
      { title: 'Fourth card' },
      { title: 'Fifth card' },
      { title: 'Sixth card' },
      { title: 'Seventh card' },
      { title: 'Eighth card' },
      { title: 'Ninth card' },
      { title: 'Tenth card' },
      { title: 'Eleventh card' },
      { title: 'Twelfth card' },
      { title: 'Thirteenth card' },
      { title: 'Fourteenth card' },
      { title: 'Fifteenth card' },
      { title: 'Sixteenth card' }
    ]
  },
  {
    name: 'Done',
    cards: [{ title: 'I did it' }]
  }
];

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
