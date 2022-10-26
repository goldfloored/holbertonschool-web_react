// import logo from './define.jpeg';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import '../App/App.css';
import React, { Fragment } from 'react';
// import { render } from 'react-dom';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className='App'>
        <Header className='App-header' />
        <hr />
        <div className='App-body'>
          <Login />
        </div>
        <hr />
        <Footer className='App-footer' />
      </div>
    </Fragment>
  );
}

export default App;
