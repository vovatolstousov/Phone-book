import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import PhoneRow from './PhoneRow';

import {changePhone, removePhone} from '../../actions/phones';

class PhoneList extends React.Component {

  handleChangePhone =(id, obj)=>{
    this.props.dispatch(changePhone(id, obj))
  };

  handleRemovePhone =(id)=>{
    this.props.dispatch(removePhone(id))
  };

  render() {
    const {phones} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 header">
            <Link className='pull-right' to={'/new'}>Create New</Link>
          </div>
          <hr />
        </div>
        <div className="row">

          <div className="col-xs-12">
            <table className="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Phone number</th>
                <th scope="col">First name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date of birth</th>
                <th scope="col">&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                phones.map((phone, i) => {
                  return (
                    <PhoneRow
                      key={phone.id}
                      index={i + 1}
                      phone={phone}
                      onChange={this.handleChangePhone}
                      delete={this.handleRemovePhone}
                    />
                  )
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {phones, loading} = state.phones;

  return {
    phones,
    loading,
  }
}

export default connect(mapStateToProps)(PhoneList);
