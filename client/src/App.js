import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'
import Footer from './components/PageFooter'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Gallery from './pages/Gallery'
import DriversApplication from './pages/DriversApplication'
import ApplicationSubmit from './pages/ApplicationSubmit'
import ContactUsPage from './pages/ContactUsPage'

import firebase from 'firebase/app';
import 'firebase/database';
// import admin from 'firebase-admin';

class App extends PureComponent {
  render() {

    // admin.initializeApp({
    //   credential: admin.credential.applicationDefault(),
    //   databaseURL: process.env.REACT_APP_URL
    // })
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

    // const messaging = firebase.messaging();
    // messaging.requestPermission()
    //   .then( () => {
    //     console.log('Gave permission')
    //   })
    //   .catch( () => {
    //     console.log('Error occurred');
    //   })
    
    // const db = firebase.database();
    return (
      <Router>

        <div className="App">
          <HeaderNav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={AboutPage} />
              <Route path='/Gallery' component={Gallery} />
              <Route path='/DriversApplication' component={DriversApplication} />
              <Route path='/ApplicationSubmit' component={ApplicationSubmit} />
              <Route path='/ContactUsPage' component={ContactUsPage} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
