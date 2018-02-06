import React from 'react';
import firebase from '../configs/firebase';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class FirebaseAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    };

    this.firebaseAuth = firebase.auth();
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin() {
    this.firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      this.setState({
        loggedIn: true
      });
    });
  }

  handleLogout() {
    this.firebaseAuth.signOut().then(() => {
      this.setState({
        loggedIn: false
      });
    });
  }

  render() {
    return (
      <div className="text-center pt-5">
        <h4>{'Firebase Authentication'}</h4>
        <div className="col-md-8 mx-auto" >
          <span>{'Test with email: "test@gmail.com" and pass: "qwetest"'}</span>
          <div className="form-group pt-3">
            <input value={this.state.email} onChange={this.handleChange} name="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input value={this.state.password} onChange={this.handleChange} name="password" className="form-control" placeholder="Password" />
          </div>
          {this.state.loggedIn ?
            <button onClick={this.handleLogout} type="submit" className="btn btn-primary">Log out</button> : <button onClick={this.handleLogin} type="submit" className="btn btn-primary">Log in</button>
          }
          <div className="pt-2">
            <h4>Are you loggedin ?</h4>
            {this.state.loggedIn ?
              <p>{'You are logged'}</p> : <p>{'You are not logged in'}</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default FirebaseAuth;