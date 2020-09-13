import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxTest from './redux/ReduxTest';
import { Provider } from 'react-redux';

import store from './redux/store'
import Routers from './Routes/Routers';

function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <ReduxTest/> */}
      <Routers/>
    </div>
    </Provider>
  );
}

export default App;
