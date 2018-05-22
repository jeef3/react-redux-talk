import React from 'react';
import Icon from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/fontawesome-free-solid';

import AddCardButton from '../atoms/AddCardButton';
import Button from '../atoms/Button';
import ButtonBar from '../atoms/ButtonBar';
import Card from '../atoms/Card';
import CardTextArea from '../atoms/CardTextArea';
import CardTitle from '../atoms/CardTitle';
import ListTitle from '../atoms/ListTitle';
import ListHeaderInput from '../atoms/ListHeaderInput';
import ListLayout from '../templates/ListLayout';
import EditableText from './EditableText';

export default ({
  list,
  onListChanged,
  onCardChanged,
  onCardCreated,
  onCardDeleted
}) => (
  <ListLayout
    list={list}
    renderHeader={() => (
      <EditableText
        value={list.name}
        render={() => <ListTitle>{list.name}</ListTitle>}
        renderEditing={({ editingValue, onKeyDown, onChange, ref }) => (
          <ListHeaderInput
            defaultValue={editingValue}
            onKeyDown={onKeyDown}
            onChange={onChange}
            innerRef={ref}
          />
        )}
        onChange={name => onListChanged({ ...list, name })}
      />
    )}
    renderCard={card => (
      <EditableText
        value={card.title}
        render={() => (
          <Card>
            <CardTitle>{card.title}</CardTitle>
          </Card>
        )}
        renderEditing={({
          editingValue,
          onKeyDown,
          onChange,
          onSubmit,
          onCancel,
          ref
        }) => (
          <div>
            <Card>
              <CardTextArea
                value={editingValue}
                onKeyDown={onKeyDown}
                onChange={onChange}
                innerRef={ref}
              />
            </Card>
            <ButtonBar>
              <Button primary onClick={onSubmit}>
                Save
              </Button>
              <Button secondary onClick={onCancel}>
                <Icon icon={faTimes} />
              </Button>
              <Button secondary onClick={() => onCardDeleted(card)}>
                <Icon icon={faTrash} />
              </Button>
            </ButtonBar>
          </div>
        )}
        onChange={title => onCardChanged({ ...card, title })}
      />
    )}
    renderFooter={() => (
      <EditableText
        defaultEditing
        value=""
        render={() => <AddCardButton>Add card</AddCardButton>}
        renderEditing={({
          editingValue,
          onKeyDown,
          onChange,
          onSubmit,
          onCancel,
          ref
        }) => (
          <div>
            <Card>
              <CardTextArea
                placeholder="Enter a title for this card..."
                value={editingValue}
                onKeyDown={onKeyDown}
                onChange={onChange}
                innerRef={ref}
              />
            </Card>
            <ButtonBar>
              <div>
                <Button primary onClick={onSubmit}>
                  Add Card
                </Button>
                <Button secondary onClick={onCancel}>
                  <Icon icon={faTimes} />
                </Button>
              </div>
            </ButtonBar>
          </div>
        )}
        onChange={title => onCardCreated({ title }, list.id)}
      />
    )}
  />
);
