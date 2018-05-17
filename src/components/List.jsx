import React from 'react';
import styled from 'styled-components';

import Card from './atoms/Card';
import EditableText from './atoms/EditableText';

const HEADER_HEIGHT = 40;
const FOOTER_HEIGHT = 40;

const Container = styled.div`
  width: 300px;
  max-height: 100%;

  border-radius: 5px;
  background: #bfc0c0;

  display: grid;
  grid-template-rows: 40px 1fr 40px;
`;
Container.displayName = 'Container';

const Header = styled.header`
  padding: 0 10px;
  line-height: ${HEADER_HEIGHT}px;
`;
Header.displayName = 'Header';

const List = styled.ul`
  overflow-y: auto;
  padding: 0 10px;
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
  padding: 0 10px;
  line-height: ${FOOTER_HEIGHT}px;
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
        value={list.name}
        render={() => <ListTitle>{list.name}</ListTitle>}
        renderEditing={(editingValue, onKeyDown, onChange) => (
          <input
            defaultValue={editingValue}
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
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
                value={card.title}
                render={() => <Card>{card.title}</Card>}
                renderEditing={(editingValue, onKeyDown, onChange) => (
                  <textarea
                    value={editingValue}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                  />
                )}
                onChange={title => onCardChange({ ...card, title })}
              />
            </CardWrapper>
          ))}
        </List>
      )}

    <Footer>
      <EditableText
        value=""
        render={() => <span>Add card</span>}
        renderEditing={(editingValue, onKeyDown, onChange) => (
          <textarea
            placeholder="New card..."
            value={editingValue}
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
        )}
        onChange={title => onCreateCard({ title }, list.id)}
      />
    </Footer>
  </Container>
);
