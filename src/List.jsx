import styled from 'styled-components';

const List = styled.div`
  flex: none;

  overflow-y: scroll;

  box-sizing: border-box;
  width: 300px;
  max-height: 100%;
  padding: 10px;
  margin-right: 10px;

  background: #bfc0c0;
  border-radius: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
List.displayName = 'List';

export default List;
