import React from 'react';
import { connect } from 'react-redux';
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleListUpdate = this.handleListUpdate.bind(this);
    this.handleCardUpdate = this.handleCardUpdate.bind(this);
    this.handleCardCreate = this.handleCardCreate.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  handleListUpdate(list) {
    fetch(`http://localhost:3001/lists/${list.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(list)
    }).then(res => res.json());
  }

  handleCardUpdate(card) {}

  handleCardCreate(card) {}

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
                onListChange={this.handleListUpdate}
                onCardChange={this.handleCardUpdate}
                onCreateCard={this.handleCareCreate}
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
  onLoad: () => dispatch({ type: 'LOAD_DATA_REQUESTED' })
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export { App as Component };
export default AppContainer;
