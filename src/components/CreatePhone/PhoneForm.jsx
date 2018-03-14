import React from 'react';
import {connect} from 'react-redux'

import InputLabel from '../Global/InputLabel';

import {saveNewPhone} from '../../actions/phones';
import {createId} from '../../Utils';

class PhoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      number: '',
      date_of_birth: ''
    }
  }

  resetState() {
    this.setState({
      first_name: '',
      last_name: '',
      number: '',
      date_of_birth: ''
    })
  };

  handleChangeInput = (e) => {
    let toSate = {};
    toSate[e.name] = e.value;
    this.setState(toSate)
  };

  createNewPhone = () => {
    const {first_name, last_name, number, date_of_birth} = this.state;
    const newPhone = {first_name, last_name, number, date_of_birth, id: createId(this.props.phones)};
    this.props.dispatch(saveNewPhone(newPhone));
    this.resetState();
  };

  render() {
    const {
      first_name,
      last_name,
      number,
      date_of_birth
    } = this.state;

    const disableButton = !(first_name && last_name && number && date_of_birth);

    return (
      <div className={'col-xs-12 col-md-5'}>
        <InputLabel
          name='first_name'
          label='Name'
          value={first_name}
          placeholder='enter first name'
          onChange={this.handleChangeInput}
        />
        <InputLabel
          name='last_name'
          label='Last name'
          value={last_name}
          placeholder='enter last name'
          onChange={this.handleChangeInput}
        />
        <InputLabel
          name='number'
          label='Number'
          value={number}
          placeholder='enter number'
          onChange={this.handleChangeInput}
        />
        <InputLabel
          name='date_of_birth'
          label='Date'
          value={date_of_birth}
          placeholder='enter date of birth'
          onChange={this.handleChangeInput}
        />
        <button
          className='btn btn-success pull-right'
          disabled={disableButton}
          onClick={this.createNewPhone}
        >
          Create
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {phones,} = state.phones;

  return {
    phones
  }
}

export default connect(mapStateToProps)(PhoneForm);

