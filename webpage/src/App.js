import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';
import TestLangingPage from './components/hearingscreening/TestLandingPage';
import AudioScreening from './components/hearingscreening/Screening';
import FAQ from './components/Faq';
import axios from 'axios';
 
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
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/screeninghome" component={TestLangingPage} />
            <Route path="/about" component={About} />
            <Route path="/audioscreening" component={AudioScreening} />
            <Route path="/faq" component={FAQ} />
            <Route component={Error} />
          </Switch>
        </div>
        <h1>{this.state.response.body}</h1>
      </BrowserRouter>
    );
  }
}

export default App;