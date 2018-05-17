import styled from 'styled-components';

const ListsWrapper = styled.div`
  overflow-x: auto;
  padding: 10px;

  display: flex;

  > * {
    flex: 0 0 auto;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
ListsWrapper.displayName = 'ListsWrapper';

export default ListsWrapper;
