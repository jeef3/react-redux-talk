import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;

  background: #4f5d75;

  display: grid;
  grid-template-rows: 50px 1fr;
`;
Container.displayName = 'AppLayout_Container';

const AppLayout = ({ renderHeader, renderLists }) => (
  <Container>
    {renderHeader()}
    {renderLists()}
  </Container>
);

export default AppLayout;
