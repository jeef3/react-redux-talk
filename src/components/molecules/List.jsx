import React from 'react';

import Card from '../atoms/Card';
import CardTitle from '../atoms/CardTitle';
import ListHeader from '../atoms/ListHeader';
import ListBody from '../atoms/ListBody';
import ListFooter from '../atoms/ListFooter';
import ListBackground from '../atoms/ListBackground';
import ListTitle from '../atoms/ListTitle';

export default ({ list }) => (
  <ListBackground>
    <ListHeader>
      <ListTitle>{list.name}</ListTitle>
    </ListHeader>

    <ListBody>
      {list.cards.map(card => (
        <li>
          <Card>
            <CardTitle>{card.title}</CardTitle>
          </Card>
        </li>
      ))}
    </ListBody>

    <ListFooter />
  </ListBackground>
);
