import React from 'react';
import styled from 'styled-components';

import Card from './atoms/Card';
import EditableText from './atoms/EditableText';

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
