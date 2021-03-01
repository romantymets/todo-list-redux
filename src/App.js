import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import MainPage from './pages/MainPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
