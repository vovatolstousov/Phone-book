import React from 'react';
import {Link} from 'react-router-dom';

import PhoneForm from './PhoneForm';

class CreatePhone extends React.PureComponent {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-12 header">
            <Link className='pull-right' to={'/'}>back to List</Link>
          </div>
          <hr/>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <PhoneForm/>
          </div>
        </div>

      </div>
    )
  }
}

export default CreatePhone;


