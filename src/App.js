import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BodyDisplay from './BodyDisplay';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyDisplay />
      <Footer />
    </div >
  );
}

export default App;
