import React from 'react';

import AddCardButton from '../atoms/AddCardButton';
import Card from '../atoms/Card';
import CardTextArea from '../atoms/CardTextArea';
import CardTitle from '../atoms/CardTitle';
import ListTitle from '../atoms/ListTitle';
import ListHeaderInput from '../atoms/ListHeaderInput';
import ListLayout from '../templates/ListLayout';
import EditableText from './EditableText';

export default ({ list, onListChange, onCardChange, onCreateCard }) => (
  <ListLayout
    list={list}
    renderHeader={() => (
      <EditableText
        value={list.name}
        render={() => <ListTitle>{list.name}</ListTitle>}
        renderEditing={(editingValue, onKeyDown, onChange, ref) => (
          <ListHeaderInput
            defaultValue={editingValue}
            onKeyDown={onKeyDown}
            onChange={onChange}
            innerRef={ref}
          />
        )}
        onChange={name => onListChange({ ...list, name })}
      />
    )}
    renderCard={card => (
      <Card>
        <EditableText
          value={card.title}
          render={() => <CardTitle>{card.title}</CardTitle>}
          renderEditing={(editingValue, onKeyDown, onChange, ref) => (
            <CardTextArea
              value={editingValue}
              onKeyDown={onKeyDown}
              onChange={onChange}
              innerRef={ref}
            />
          )}
          onChange={title => onCardChange({ ...card, title })}
        />
      </Card>
    )}
    renderFooter={() => (
      <EditableText
        value=""
        render={() => <AddCardButton>Add card</AddCardButton>}
        renderEditing={(editingValue, onKeyDown, onChange, ref) => (
          <Card>
            <CardTextArea
              placeholder="Enter a title for this card..."
              value={editingValue}
              onKeyDown={onKeyDown}
              onChange={onChange}
              innerRef={ref}
            />
          </Card>
        )}
        onChange={title => onCreateCard({ title }, list.id)}
      />
    )}
  />
);
