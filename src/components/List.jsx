import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import EditableText from './EditableText';

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

const ListTitle = styled.h3`
  margin: 0;
`;
ListTitle.displayName = 'ListTitle';

export default ({ list, onListChange, onCardChange, onCreateCard }) => (
  <Container>
    <Header>
      <EditableText
        defaultValue={list.name}
        render={value => <ListTitle>{value}</ListTitle>}
        renderEditing={(value, onKeyDown) => (
          <input defaultValue={value} onKeyDown={onKeyDown} />
        )}
        onChange={name => onListChange({ ...list, name })}
      />
    </Header>

    {list.cards &&
      list.cards.length > 0 && (
        <List>
          {list.cards.map(card => (
            <CardWrapper key={card.id}>
              <EditableText
                defaultValue={card.title}
                render={value => <Card>{value}</Card>}
                renderEditing={(value, onKeyDown) => (
                  <textarea defaultValue={value} onKeyDown={onKeyDown} />
                )}
                onChange={title => onCardChange({ ...card, title })}
              />
            </CardWrapper>
          ))}
        </List>
      )}

    <Footer>
      <EditableText
        defaultValue=""
        render={() => <span>Add card</span>}
        renderEditing={(value, onKeyDown) => (
          <textarea
            placeholder="New card..."
            defaultValue=""
            onKeyDown={onKeyDown}
          />
        )}
        onChange={onCreateCard}
      />
    </Footer>
  </Container>
);
