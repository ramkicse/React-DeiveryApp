import React from 'react';
import './App.css';
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
