import React from 'react';
import styled from 'styled-components';

import BigPageText from '../atoms/BigPageText';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
Container.displayName = 'Container';

export default () => (
  <Container>
    <BigPageText>Loading...</BigPageText>
  </Container>
);
