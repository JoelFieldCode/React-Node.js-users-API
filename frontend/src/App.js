import React, { Component } from 'react';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Dashboard />
       </Router>
    );
  }
}

export default App;
