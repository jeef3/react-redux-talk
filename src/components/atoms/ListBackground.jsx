import styled from 'styled-components';

const HEADER_HEIGHT = 40;

const ListBackground = styled.div`
  width: 300px;
  max-height: 100%;

  border-radius: 5px;

  background: #bfc0c0;

  display: grid;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr auto;
`;
ListBackground.displayName = 'ListBackground';

export default ListBackground;
