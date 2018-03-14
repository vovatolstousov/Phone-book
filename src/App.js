import React from 'react';
import {Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/configureStore';
import history from './history';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PhoneList from './components/PhoneList';
import CreatePhone from './components/CreatePhone';
import MainLayout from './layouts/MainLayout';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainLayout path='/' component={MainLayout}>
            <Route exact path='/list' component={PhoneList}/>
            <Route exact path='/new' component={CreatePhone}/>
            <Route exact path='/' component={() => <Redirect to="/list"/>}/>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;
