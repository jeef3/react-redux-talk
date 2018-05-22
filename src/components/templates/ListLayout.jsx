import React from 'react';
import styled from 'styled-components';

import ListHeader from '../atoms/ListHeader';
import ListBody from '../atoms/ListBody';
import ListFooter from '../atoms/ListFooter';

const HEADER_HEIGHT = 40;

const Container = styled.div`
  width: 300px;
  max-height: 100%;

  border-radius: 5px;

  background: #bfc0c0;

  display: grid;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr auto;
`;
Container.displayName = 'Container';

const ListLayout = ({ list, renderHeader, renderCard, renderFooter }) => (
  <Container>
    <ListHeader>{renderHeader()}</ListHeader>

    <ListBody>
      {list.cards &&
        list.cards.map(card => <li key={card.id}>{renderCard(card)}</li>)}
    </ListBody>

    <ListFooter>{renderFooter()}</ListFooter>
  </Container>
);

export default ListLayout;
