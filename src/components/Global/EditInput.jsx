import React from 'react';

class EditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value})
    }
  };

  saveValue() {
    if (this.state.value !== this.props.value) {
      this.props.onChange(this.state.value);
    }
  };

  toggleEditing = (value) => {
    if (value) {
      if (this.props.onFocus) {
        this.props.onFocus()
      }
      this.setState({editing: true});

    } else {
      this.saveValue();
      if (this.props.onBlur) {
        this.props.onBlur()
      }
      this.setState({editing: false});
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.toggleEditing()
    }
  };

  handleChange = (e) => {
    const val = e.target.value;
    this.setState({value: val});
  };

  moveCaretAtEnd(e) {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  render() {
    if (this.state.editing) {
      return <span className="inline-edit-container">
        <input
          autoFocus
          onFocus={this.moveCaretAtEnd}
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          onBlur={e => this.toggleEditing()}
        />
      </span>;
    } else {
      return (
        <a className='editable-text' onClick={this.toggleEditing}>
          {this.props.value}
          <i className="glyphicon glyphicon-pencil"/>
        </a>
      )
    }
  }
}

export default EditInput;
