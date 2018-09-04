import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'
import Footer from './components/PageFooter'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import DriversApplication from './pages/DriversApplication'

class App extends PureComponent {
  render() {
    return (
      <Router>

        <div className="App">
          <HeaderNav />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/About' component={About}/>
              <Route path='/Gallery' component={Gallery}/>
              <Route path='/DriversApplication' component={DriversApplication}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
