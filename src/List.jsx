import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const HEADER_HEIGHT = 40;
const FOOTER_HEIGHT = 40;

const Container = styled.div`
  width: 300px;
  height: calc(100% - 10px);

  > * {
    padding: 0 10px;

    background: #bfc0c0;
  }
`;
Container.displayName = 'Container';

const Header = styled.header`
  line-height: ${HEADER_HEIGHT}px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
Header.displayName = 'Header';

const List = styled.ul`
  overflow-y: auto;
  max-height: calc(100% - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  margin: 0;

  list-style: none;
`;
List.displayName = 'List';

const CardWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
CardWrapper.displayName = 'CardWrapper';

const Footer = styled.footer`
  line-height: ${FOOTER_HEIGHT}px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
Footer.displayName = 'Footer';

export default ({ title, cards }) => (
  <Container>
    <Header>{title}</Header>

    {cards &&
      cards.length > 0 && (
        <List>
          {cards.map(card => (
            <CardWrapper key={card.id}>
              <Card card={card}>{card.title}</Card>
            </CardWrapper>
          ))}
        </List>
      )}

    <Footer>Add card</Footer>
  </Container>
);
