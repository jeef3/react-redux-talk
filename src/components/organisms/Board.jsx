import React from 'react';
import styled from 'styled-components';

import AppState from '../../AppState';
import List from '../molecules/List';

const Container = styled.div`
  overflow-x: auto;
  padding: 10px;

  display: flex;
  align-items: flex-start;

  > * {
    flex: 0 0 auto;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
Container.displayName = 'Board_Container';

const Board = () => (
  <AppState.Consumer>
    {({ lists, cards, listOrder }) => (
      <Container>
        {listOrder
          .map(listId => lists.find(list => list.id === listId))
          .map(list => ({
            ...list,
            cards: list.cards.map(cardId =>
              cards.find(card => card.id === cardId)
            )
          }))
          .map(list => <List key={list.id} list={list} />)}
      </Container>
    )}
  </AppState.Consumer>
);

export default Board;
