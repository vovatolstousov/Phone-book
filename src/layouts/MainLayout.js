import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {getPhones} from '../actions/phones';

class MainLayout extends React.PureComponent{

  componentDidMount(){
    this.props.dispatch(getPhones())
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default withRouter(connect(mapStateToProps)(MainLayout))




