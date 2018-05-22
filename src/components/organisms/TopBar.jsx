import React from 'react';
import styled from 'styled-components';

import BigTitle from '../atoms/BigTitle';

const Container = styled.div`
  background: #ec5766;

  display: flex;
  align-items: center;
  justify-content: center;
`;
Container.displayName = 'AppHeader_Container';

const TopBar = () => (
  <Container>
    <BigTitle>Mini Trello</BigTitle>
  </Container>
);

export default TopBar;
