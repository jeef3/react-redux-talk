import React from 'react';
import { connect } from 'react-redux';

import { List as ListActions, Card as CardActions } from '../actions';
import ListsWrapper from './atoms/ListsWrapper';
import List from './List';

const ListsContainer = ({
  lists,
  onListUpdated,
  onCardUpdated,
  onCardCreated
}) => (
  <ListsWrapper>
    {lists.map(list => (
      <List
        key={list.id}
        list={list}
        onListChange={onListUpdated}
        onCardChange={onCardUpdated}
        onCreateCard={onCardCreated}
      />
    ))}
  </ListsWrapper>
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

const ListsContainerContainer = connect(mapStateToProps, mapDispatchToProps)(
  ListsContainer
);

export { ListsContainer as Component };
export default ListsContainerContainer;
