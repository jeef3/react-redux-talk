import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { List as ListActions, Card as CardActions } from '../../actions';
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

const Board = ({ lists, onListUpdated, onCardUpdated, onCardCreated }) => (
  <Container>
    {lists.map(list => (
      <List
        key={list.id}
        list={list}
        onListChange={onListUpdated}
        onCardChange={onCardUpdated}
        onCreateCard={onCardCreated}
      />
    ))}
  </Container>
);

const mapStateToProps = state => ({
  lists: state.listOrder.map(id => ({
    ...state.lists[id],
    cards: state.lists[id].cards.map(cid => state.cards[cid])
  }))
});

const mapDispatchToProps = dispatch => ({
  onListUpdated: list => dispatch(ListActions.updateList(list)),
  onListCreated: list => dispatch(ListActions.createList(list)),
  onCardUpdated: card => dispatch(CardActions.updateCard(card)),
  onCardCreated: (card, listId) =>
    dispatch(CardActions.createCard(card, listId))
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export { Board as Component };
export default BoardContainer;
