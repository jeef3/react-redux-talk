import styled from 'styled-components';

const ListBody = styled.ul`
  overflow-y: auto;
  padding: 0 10px;
  margin: 0;

  list-style: none;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
ListBody.displayName = 'ListBody';

export default ListBody;
