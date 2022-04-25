import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Feed from './components/layout/Feed';
import Widgets from './components/layout/Widgets';
import Login from './components/Login';
import { useStateValue } from './context/StateProvider';

const App = () => {
  const [{ user }] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default App;
