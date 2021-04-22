import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import test from './components/Screening';

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/helloWorldd').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter> 
        {/* frontend stuff */}
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/test" component={test} />
            </Switch>
          </div>
        </BrowserRouter>
        {/* from server (backend) */}
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;