import styled from 'styled-components';

const AppLayout = styled.div`
  height: 100vh;

  background: #4f5d75;

  display: grid;
  grid-template-rows: 50px 1fr;
`;
AppLayout.displayName = 'AppLayout';

export default AppLayout;
