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
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleIdleClick() {
    this.setState({ editing: true });
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
      this.props.onChange(this.state.value);
    }
  }

  handleOnChange({ currentTarget: { value } }) {
    this.setState({ value });
  }

  render() {
    const { render, renderEditing } = this.props;
    const { value, editing } = this.state;

    let El;
    let props;

    if (editing) {
      El = renderEditing(value, this.handleOnChange);
      props = {
        onKeyUp: this.handleKeyUp
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
