import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DisplayTable from './Table';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayTable />
      <Footer />

    </div >
  );
}

export default App;
