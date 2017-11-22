import React from 'react';
import database from '../firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const usersRef = database.ref('users/');

// this function add new user if not exists
// or update fields if userEmail exists
function addUser(userEmail, userName) {
  const newPostKey = usersRef.push().key;
  usersRef.child(userEmail).set({
    id: newPostKey,
    email: userEmail,
    name: userName
  });
}

// TODO:
function readUserByUserEmail(userEmail) {

}

// TODO:
function removeUserByUserEmail(userEmail) {

}

// FIXME: check
function readAllUsers() {
  usersRef.orderByKey().on("child_added", function (snapshot) {
    console.log(snapshot.key + ' ' + snapshot.val().name);
  });
}

module.exports = class FirebaseCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const userEmail = this.state.userEmail;
    const userName = this.state.userName;
    addUser(userEmail, userName);
    event.preventDefault();
  }

  // TODO: lists of users
  render() {
    return (
      <div className="col-md-6 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col md-6">
              <label>userEmail</label>
            </div>
            <div className="col md-6">
              <input name="userEmail" type="text" className="form-control" value={this.state.userEmail} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col md-6">
              <label>userName</label>
            </div>
            <div className="col md-6">
              <input name="userName" type="text" className="form-control" value={this.state.userName} onChange={this.handleChange} />
            </div>
          </div>
          <input type="submit" className="btn btn-danger" value="Submit" />
        </form >
        <div className="pb-2">
          <p>
            userEmail = {this.state.userEmail}
          </p>
          <p>
            userName = {this.state.userName}
          </p>
        </div>
      </div >
    );
  }
};