import styled from 'styled-components';

const Card = styled.div`
  height: 50px;
  padding: 5px;
  margin-bottom: 10px;

  border-radius: 3px;

  background: #ffffff;

  :last-child {
    margin-bottom: 0;
  }
`;
Card.displayName = 'Card';

export default Card;
