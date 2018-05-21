import React from 'react';
import styled from 'styled-components';

import TextArea from './atoms/TextArea';
import Card from './atoms/Card';
import EditableText from './atoms/EditableText';
import ListHeader from './atoms/ListHeader';
import ListFooter from './atoms/ListFooter';
import ListTitle from './atoms/ListTitle';

const HEADER_HEIGHT = 40;
const FOOTER_HEIGHT = 40;

const Container = styled.div`
  width: 300px;
  max-height: 100%;

  border-radius: 5px;
  background: #bfc0c0;

  display: grid;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr ${FOOTER_HEIGHT}px;
`;
Container.displayName = 'Container';

const List = styled.ul`
  overflow-y: auto;
  padding: 0 10px;
  margin: 0;

  list-style: none;

  ${Card}:not(:last-child) {
    margin-bottom: 10px;
  }
`;
List.displayName = 'List';

const CardTitle = styled.div`
  padding: 8px;

  cursor: pointer;
`;
CardTitle.displayName = 'CardTitle';

export default ({ list, onListChange, onCardChange, onCreateCard }) => (
  <Container>
    <ListHeader>
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
    </ListHeader>

    {list.cards &&
      list.cards.length > 0 && (
        <List>
          {list.cards.map(card => (
            <Card key={card.id}>
              <EditableText
                value={card.title}
                render={() => <CardTitle>{card.title}</CardTitle>}
                renderEditing={(editingValue, onKeyDown, onChange, ref) => (
                  <TextArea
                    value={editingValue}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                    innerRef={ref}
                  />
                )}
                onChange={title => onCardChange({ ...card, title })}
              />
            </Card>
          ))}
        </List>
      )}

    <ListFooter>
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
    </ListFooter>
  </Container>
);
