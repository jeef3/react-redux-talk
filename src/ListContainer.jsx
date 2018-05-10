import styled from 'styled-components';

const ListContainer = styled.div`
  overflow-x: auto;

  display: flex;

  > * {
    flex: 0 0 auto;
    margin-left: 10px;
  }

  &::after {
    content: '';
    flex: 0 0 10px;
  }
`;
ListContainer.displayName = 'ListContainer';

export default ListContainer;
