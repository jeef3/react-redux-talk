import React from 'react';
import Icon from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faTrash } from '@fortawesome/fontawesome-free-solid';

import AddCardButton from '../atoms/AddCardButton';
import Button from '../atoms/Button';
import ButtonBar from '../atoms/ButtonBar';
import ButtonGroup from '../atoms/ButtonGroup';
import Card from '../atoms/Card';
import CardTextArea from '../atoms/CardTextArea';
import CardTitle from '../atoms/CardTitle';
import DisabledText from '../atoms/DisabledText';
import ListTitle from '../atoms/ListTitle';
import ListHeaderInput from '../atoms/ListHeaderInput';
import ListLayout from '../templates/ListLayout';
import EditableText from './EditableText';

const nl2br = text =>
  text.split('\n').map(line => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));

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
    renderCard={card =>
      card.clientId ? (
        <Card>
          <CardTitle>
            <DisabledText>{nl2br(card.title)}</DisabledText>
          </CardTitle>
        </Card>
      ) : (
        <EditableText
          value={card.title}
          render={() => (
            <Card>
              <CardTitle>{nl2br(card.title)}</CardTitle>
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
                <ButtonGroup>
                  <Button primary title="Save changes" onClick={onSubmit}>
                    Save
                  </Button>
                  <Button secondary title="Cancel changes" onClick={onCancel}>
                    <Icon icon={faTimes} />
                  </Button>
                </ButtonGroup>

                <ButtonGroup>
                  <Button
                    secondary
                    title="Delete card"
                    onClick={() => onCardDeleted(card)}
                  >
                    <Icon icon={faTrash} />
                  </Button>
                </ButtonGroup>
              </ButtonBar>
            </div>
          )}
          onChange={title => onCardChanged({ ...card, title })}
        />
      )
    }
    renderFooter={() => (
      <EditableText
        value=""
        render={() => (
          <AddCardButton>
            <Icon icon={faPlus} /> Add card
          </AddCardButton>
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
                placeholder="Enter a title for this card..."
                value={editingValue}
                onKeyDown={onKeyDown}
                onChange={onChange}
                innerRef={ref}
              />
            </Card>
            <ButtonBar>
              <ButtonGroup>
                <Button primary title="Add card" onClick={onSubmit}>
                  Add Card
                </Button>
                <Button secondary title="Cancel adding card" onClick={onCancel}>
                  <Icon icon={faTimes} />
                </Button>
              </ButtonGroup>
            </ButtonBar>
          </div>
        )}
        onChange={title => onCardCreated({ title }, list.id)}
      />
    )}
  />
);
