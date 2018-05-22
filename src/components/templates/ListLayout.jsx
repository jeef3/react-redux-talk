import React from 'react';

import ListHeader from '../atoms/ListHeader';
import ListBody from '../atoms/ListBody';
import ListFooter from '../atoms/ListFooter';
import ListBackground from '../atoms/ListBackground';

const ListLayout = ({ list, renderHeader, renderCard, renderFooter }) => (
  <ListBackground>
    {renderHeader && <ListHeader>{renderHeader()}</ListHeader>}

    {renderCard && (
      <ListBody>
        {list.cards &&
          list.cards.map(card => <li key={card.id}>{renderCard(card)}</li>)}
      </ListBody>
    )}

    {renderFooter && <ListFooter>{renderFooter()}</ListFooter>}
  </ListBackground>
);

export default ListLayout;
