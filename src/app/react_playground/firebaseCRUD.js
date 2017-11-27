import React from 'react';
import database from '../firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class FirebaseCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userName: '',
      user: {}
    };

    this.users = [];

    this.usersRef = database.ref('users/');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.readUserByEmail('zxc'); // for testing
    this.readAllUsers(this.users); // for testing
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.addUser(this.state.userEmail, this.state.userName);
    event.preventDefault();
  }

  // adds new user if not exists
  // or update user fields if userEmail exists
  addUser(userEmail, userName) {
    const newPostKey = this.usersRef.push().key;
    this.usersRef.child(userEmail).set({
      id: newPostKey,
      email: userEmail,
      name: userName
    });
  }

  readUserByEmail(userEmail) {
    let user = {};
    this.usersRef.child(userEmail).on('value', snapshot => {
      user = {
        id: snapshot.val().id,
        email: snapshot.val().email,
        name: snapshot.val().name
      };
      this.setState({ user });
    });
  }

  removeUserByEmail(userEmail) {
    this.usersRef.child(userEmail).remove();
  }

  readAllUsers(users) {
    this.usersRef.on('value', snapshot => {
      snapshot.forEach(child => {
        users.push({
          id: child.val().id,
          email: child.val().email,
          name: child.val().name
        });
        this.setState(users);
      });
    });
  }

  UsersList(props) {
    const content = props.users.map(user =>
      <div key={user.id}>
        {user.id}, {user.email}, {user.name}
      </div>
    );
    return (
      <div>
        {content}
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-6 mx-auto" >
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
          <p>
            readUserByEmail() = id: {this.state.user.id}, email: {this.state.user.email}, name: {this.state.user.name}
          </p>
        </div>
        <div className="pb-2">
          users:
          <this.UsersList users={this.users} />
        </div>
      </div >
    );
  }
}