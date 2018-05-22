import styled from 'styled-components';

import ListTitle from './ListTitle';

const ListHeaderInput = ListTitle.extend`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;

  font: inherit;

  border: 0;

  background: none;
`;
ListHeaderInput.displayName = 'ListHeaderInput';

export default ListHeaderInput;
