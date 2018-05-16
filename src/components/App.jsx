import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Card as CardActions, List as ListActions } from '../actions';
import ListContainer from './atoms/ListContainer';
import List from './List';

const Container = styled.div`
  height: 100vh;

  background: #4f5d75;

  display: grid;
  grid-template-rows: 50px 1fr;
`;
Container.displayName = 'Container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { lists } = this.props;

    return (
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
          {lists &&
            lists.map(list => (
              <List
                key={list.id}
                list={list}
                onListChange={this.props.onListUpdated}
                onCardChange={this.props.onCardUpdated}
                onCreateCard={this.props.onCardCreated}
              />
            ))}
        </ListContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.listOrder.map(id => ({
    ...state.lists[id],
    cards: state.lists[id].cards.map(cid => state.cards[cid])
  }))
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch({ type: 'LOAD_DATA_REQUESTED' }),
  onListUpdated: list => dispatch(ListActions.updateList(list)),
  onListCreated: list => dispatch(ListActions.createList(list)),
  onCardUpdated: card => dispatch(CardActions.updateCard(card)),
  onCardCreated: card => dispatch(CardActions.createCard(card))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export { App as Component };
export default AppContainer;
