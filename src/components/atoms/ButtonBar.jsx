import styled from 'styled-components';

import Button from './Button';

const ButtonBar = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: space-between;

  ${Button}:not(:last-child) {
    margin-right: 10px;
  }
`;
ButtonBar.displayName = 'ButtonBar';

export default ButtonBar;
