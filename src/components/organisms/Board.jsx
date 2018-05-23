import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import Icon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

import { List as ListActions, Card as CardActions } from '../../actions';
import ListHeaderInput from '../atoms/ListHeaderInput';
import ListLayout from '../templates/ListLayout';
import ListTitle from '../atoms/ListTitle';
import EditableText from '../molecules/EditableText';
import List from '../molecules/List';
import LoadingData from '../organisms/LoadingData';

const Container = styled.div`
  overflow-x: auto;
  padding: 10px;

  display: flex;
  align-items: flex-start;

  > * {
    flex: 0 0 auto;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
Container.displayName = 'Board_Container';

const Board = ({
  loading,
  lists,
  onListUpdated,
  onListCreated,
  onCardUpdated,
  onCardCreated,
  onCardDeleted
}) =>
  loading ? (
    <LoadingData />
  ) : (
    <Container>
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          onListChanged={onListUpdated}
          onCardChanged={onCardUpdated}
          onCardCreated={onCardCreated}
          onCardDeleted={onCardDeleted}
        />
      ))}

      <ListLayout
        renderHeader={() => (
          <EditableText
            value=""
            render={() => (
              <ListTitle>
                <Icon icon={faPlus} /> Add new list
              </ListTitle>
            )}
            renderEditing={({ editingValue, onKeyDown, onChange, ref }) => (
              <ListHeaderInput
                defaultValue={editingValue}
                onKeyDown={onKeyDown}
                onChange={onChange}
                innerRef={ref}
              />
            )}
            onChange={title => onListCreated({ title })}
          />
        )}
      />
    </Container>
  );

const mapStateToProps = state => ({
  loading: state.loading.data,
  lists: state.listOrder.map(id => ({
    ...state.lists[id],
    cards: state.lists[id].cards.map(cid => state.cards[cid])
  }))
});

const mapDispatchToProps = dispatch => ({
  onListUpdated: list => dispatch(ListActions.updateList(list)),
  onListCreated: list => dispatch(ListActions.createList(list)),
  onCardUpdated: card => dispatch(CardActions.updateCard(card)),
  onCardCreated: (card, listId) =>
    dispatch(CardActions.createCard(card, listId)),
  onCardDeleted: card => dispatch(CardActions.deleteCard(card))
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export { Board as Component };
export default BoardContainer;
