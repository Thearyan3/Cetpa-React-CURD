import React from 'react';
import './App.css';
// import { Provider } from 'react-redux';
// import store from './assets/store';
// import Counter from './assets/Counter';
import Table from "./assets/Table";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";


function App() {
  return (
    <>
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
