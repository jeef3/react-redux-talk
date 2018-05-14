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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };

    this.handleListUpdate = this.handleListUpdate.bind(this);
    this.handleCardUpdate = this.handleCardUpdate.bind(this);
    this.handleCardCreate = this.handleCardCreate.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/lists')
      .then(res => res.json())
      .then(lists => this.setState({ lists }));
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
    const { lists } = this.state;

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
          {lists.map(list => (
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
