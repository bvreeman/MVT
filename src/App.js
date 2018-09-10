import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'
import Footer from './components/PageFooter'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import DriversApplication from './pages/DriversApplication'
import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/database';
class App extends PureComponent {
  render() {
    const config = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
    };
  
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    
    // const db = firebase.database();
    return (
      <Router>

        <div className="App container-fluid">
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
