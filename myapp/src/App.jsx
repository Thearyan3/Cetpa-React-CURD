import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './assets/store';
import Counter from './assets/Counter';

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
