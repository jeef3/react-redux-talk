import React, { Component } from 'react';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.defaultEditing) {
      this.open();
    }
  }

  handleReturnToIdle({ target }) {
    if (this.elemRef.current.contains(target)) {
      return;
    }

    this.close();
  }

  handleIdleClick() {
    this.open();
  }

  // FIXME: Don't like having these two
  handleKeyDown({ key, shiftKey }) {
    if (key === 'Enter' && !shiftKey) {
      this.commit();
    }
  }

  handleChange({ currentTarget: { value } }) {
    this.setState({ editingValue: value });
  }

  handleSubmit() {
    this.commit();
  }

  handleCancel() {
    this.close();
  }

  open() {
    this.setState({ editing: true }, () => {
      const editor = this.elemRef.current;

      if (!editor) {
        return;
      }

      editor.focus();
      editor.select();
    });

    document.addEventListener('click', this.handleReturnToIdle);
  }

  commit() {
    this.close();
    this.props.onChange(this.state.editingValue);
  }

  close() {
    this.setState({ editing: false });
    document.removeEventListener('click', this.handleReturnToIdle);
  }

  render() {
    const { render, renderEditing } = this.props;
    const { editingValue, editing } = this.state;

    let El;
    let props;

    if (editing) {
      El = renderEditing({
        editingValue,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        onCancel: this.handleCancel,
        ref: this.elemRef
      });

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
