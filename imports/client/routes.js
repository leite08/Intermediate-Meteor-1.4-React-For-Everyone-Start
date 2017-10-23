import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { render } from 'react-dom';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import App from './App';
import About from './pages/About';
import MainLayout from './layouts/MainLayout'

Meteor.startup(() => {
  render(
    <Router>
      <MainLayout>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/:id" component={App}/>
      </MainLayout>
    </Router>,
    document.getElementById('render-target'));
});