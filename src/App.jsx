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
  }

  componentDidMount() {
    fetch('http://localhost:3001/lists')
      .then(res => res.json())
      .then(lists => this.setState({ lists }));
  }

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
              onListChange={l => console.log('update', l)}
              onCardChange={c => console.log('update', c)}
              onCreateCard={c => console.log('create', c)}
            />
          ))}
        </ListContainer>
      </Container>
    );
  }
}
