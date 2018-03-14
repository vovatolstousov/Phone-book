import React from 'react';

import EditInput from '../Global/EditInput';

class PhoneRow extends React.Component {

  handleChange = (e) => {
    this.props.onChange(this.props.phone.id, e)
  };

  deletePhone = () => {
    this.props.delete(this.props.phone.id)
  };

  render() {
    const {
      phone,
      index
    } = this.props;

    return (
      <tr className='phone-row'>
        <th scope="row">{index}</th>
        <td>
          <EditInput
            onChange={e => this.handleChange({name: 'number', value: e})}
            value={phone.number}
          />
        </td>
        <td>
          <EditInput
            onChange={e => this.handleChange({name: 'first_name', value: e})}
            value={phone.first_name}
          />
        </td>
        <td>
          <EditInput
            onChange={e => this.handleChange({name: 'last_name', value: e})}
            value={phone.last_name}
          />
        </td>
        <td>
          <EditInput
            onChange={e => this.handleChange({name: 'date_of_birth', value: e})}
            value={phone.date_of_birth}
          />
        </td>
        <td>
          <i
            className="icon-delete glyphicon glyphicon-remove"
            onClick={this.deletePhone}
          />
        </td>
      </tr>
    )
  }
}

export default PhoneRow;
