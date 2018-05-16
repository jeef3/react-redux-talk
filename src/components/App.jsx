import React from 'react';
import { connect } from 'react-redux';

import { Card as CardActions, List as ListActions } from '../actions';
import AppLayout from './layout/AppLayout';
import ListContainer from './atoms/ListContainer';
import List from './List';

const App = ({ lists, onListUpdated, onCardUpdated, onCardCreated }) => (
  <AppLayout>
    <div
      style={{
        color: '#2D3142',
        fontSize: 32,
        fontWeight: 900,
        background: '#EC5766'
      }}
    >
      Mini Trello
    </div>

    <ListContainer>
      {lists &&
        lists.map(list => (
          <List
            key={list.id}
            list={list}
            onListChange={onListUpdated}
            onCardChange={onCardUpdated}
            onCreateCard={onCardCreated}
          />
        ))}
    </ListContainer>
  </AppLayout>
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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export { App as Component };
export default AppContainer;
