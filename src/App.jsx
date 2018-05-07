import React from 'react';

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

export default () => (
  <div
    style={{
      height: '100%',
      background: '#4F5D75'
    }}
  >
    <ScrollContainer>
      <ListContainer>
        {lists.map(
          list =>
            list.cards.length ? (
              <List>{list.cards.map(card => <Card>{card.title}</Card>)}</List>
            ) : (
              <div>Add new list</div>
            )
        )}
        <List>
          <div>Add new list</div>
        </List>
      </ListContainer>
    </ScrollContainer>
  </div>
);
