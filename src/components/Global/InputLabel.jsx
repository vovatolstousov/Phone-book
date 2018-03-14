import React from 'react';

class InputLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value})
    }
  };

  createObj(value) {
    const {name} = this.props;
    return {
      name: name,
      value: value
    };
  };

  handleChangeValue = (e) => {
    this.setState({value: e.target.value});
    this.props.onChange(this.createObj(e.target.value));
  };

  render() {
    const {value} = this.state;
    const {label, placeholder, error} = this.props;
    return (
      <div className={'form-group' + (!!error ? ' error' : '')}>
        <label>{label}</label>
        <input
          className="form-control"
          value={value}
          onChange={this.handleChangeValue}
          placeholder={placeholder}
        />
        {error &&
        <div style={{position: 'absolute'}} className="error-text">{error}</div>
        }
      </div>
    )
  }
}

export default InputLabel;


