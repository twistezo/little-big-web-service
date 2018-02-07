import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import PlaygroundBootstrap from './playgroundBootstrap';
import PlaygroundInheritance from './PlaygroundInheritance';
import FirebaseCRUD from './firebaseCRUD';
import FirebaseAuth from './firebaseAuth';

const TabsNavbar = () => (
  <Router>
    <div>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/bootstrap">Bootstrap</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/react">React</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/firebaseCRUD">Firebase CRUD</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/FirebaseAuth">Firebase Auth</NavLink>
        </li>
      </ul>
      <Route exact path="/bootstrap" component={PlaygroundBootstrap} />
      <Route path="/react" component={PlaygroundInheritance} />
      <Route path="/firebaseCRUD" component={FirebaseCRUD} />
      <Route path="/FirebaseAuth" component={FirebaseAuth} />
      <Redirect from="/" to="/bootstrap" />
    </div>
  </Router>
);

class Layout extends React.Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="pb-5 text-center">
          <h2>Little Big Web Service - playground</h2>
        </div>
        <TabsNavbar />
      </div >
    );
  }
}

export default Layout;
