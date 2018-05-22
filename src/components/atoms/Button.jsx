import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => (props.primary ? '8px 16px' : '8px 12px')};

  cursor: pointer;
  color: ${props => (props.primary ? '#ffffff' : '#4f5d75')};
  font: inherit;

  border: 0;
  border-radius: 3px;

  background: ${props => (props.primary ? '#6da34d' : 'transparent')};

  &:hover,
  &:focus {
    color: ${props => (props.primary ? '#ffffff' : '#4f5d75')};

    background: ${props =>
      props.primary ? '#87b36d' : 'rgba(255, 255, 255, 0.25)'};
  }

  &:active {
    color: ${props => (props.primary ? '#ffffff' : '#4f5d75')};

    background: ${props => (props.primary ? '#5a8640' : 'rgba(0, 0, 0, 0.1)')};
  }
`;
Button.displayName = 'Button';

export default Button;
