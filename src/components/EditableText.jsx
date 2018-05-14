import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text'
})`
  padding: 0;
  margin: 0;
  font: inherit;

  border: 0;
`;
Input.displayName = 'Input';

export default class EditableText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue,
      editing: false
    };

    this.handleIdleClick = this.handleIdleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleIdleClick() {
    this.setState({ editing: true });
  }

  handleKeyDown({ key, shiftKey, currentTarget: { value } }) {
    if (key === 'Enter' && !shiftKey) {
      this.setState({ editing: false });
      this.props.onChange(this.state.value);
    } else {
      this.setState({ value });
    }
  }

  render() {
    const { render, renderEditing } = this.props;
    const { value, editing } = this.state;

    let El;
    let props;

    if (editing) {
      El = renderEditing(value, this.handleKeyDown);
      props = {
        onKeyUp: this.handleKeyDown
      };
    } else {
      El = render(value);
      props = {
        onClick: this.handleIdleClick
      };
    }

    return React.cloneElement(El, props);
  }
}
