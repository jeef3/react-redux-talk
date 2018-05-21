import styled from 'styled-components';

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  margin: 0;

  font: inherit;

  resize: none;
  border: 0;
  background: none;
`;
TextArea.displayName = 'TextArea';

export default TextArea;
