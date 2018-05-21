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

    this.elemRef = React.createRef();

    this.state = {
      editingValue: props.value,
      editing: false
    };

    this.handleIdleClick = this.handleIdleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReturnToIdle = this.handleReturnToIdle.bind(this);
  }

  handleReturnToIdle({ target }) {
    if (this.elemRef.current.contains(target)) {
      return;
    }

    this.setState({ editing: false });

    document.removeEventListener('click', this.handleReturnToIdle);
  }

  handleIdleClick() {
    this.setState({ editing: true }, () => {
      const editor = this.elemRef.current;

      if (!editor) {
        return;
      }

      editor.focus();
      editor.select();

      document.addEventListener('click', this.handleReturnToIdle);
    });
  }

  // FIXME: Don't like having these two
  handleKeyDown({ key, shiftKey }) {
    if (key === 'Enter' && !shiftKey) {
      this.setState({ editing: false });
      this.props.onChange(this.state.editingValue);
      document.removeEventListener('click', this.handleReturnToIdle);
    }
  }

  handleChange({ currentTarget: { value } }) {
    this.setState({ editingValue: value });
  }

  render() {
    const { render, renderEditing } = this.props;
    const { editingValue, editing } = this.state;

    let El;
    let props;

    if (editing) {
      El = renderEditing(
        editingValue,
        this.handleKeyDown,
        this.handleChange,
        this.elemRef
      );
      props = {
        onKeyUp: this.handleKeyDown
      };
    } else {
      El = render();
      props = {
        onClick: this.handleIdleClick
      };
    }

    return React.cloneElement(El, props);
  }
}
