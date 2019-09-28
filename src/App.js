import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Home';

// Not sure I have to move the router here
function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div >
    </Router>
  );
}

export default App;
