import React from 'react';
import styled from 'styled-components';
import Icon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

import BigPageText from '../atoms/BigPageText';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
Container.displayName = 'Container';

export default () => (
  <Container>
    <BigPageText>
      <Icon icon={faSpinner} spin /> Loading...
    </BigPageText>
  </Container>
);
