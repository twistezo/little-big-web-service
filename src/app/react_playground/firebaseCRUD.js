import React from 'react';
import database from '../firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

module.exports = class FirebaseCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userName: '',
      user: {},
      users: {}
    };

    this.usersRef = database.ref('users/');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.readUserByEmail('zxc');
    this.readAllUsers();
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

  // FIXME:
  readAllUsers() {
    const users = [];
    this.usersRef.orderByKey().on('child_added', snapshot => {
      const user = snapshot.val();
      users.push(user);
    });
    console.log(users);
    // this.setState({ users });  // FIXME:
  }

  UserList() {
    // const users = this.state.users;
    // console.log(users);
    const users = [1, 2, 3, 4, 5];
    const listItems = users.map((user) =>
      <li key={user}>
        {user}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

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
          <p>
            readUserByEmail() = id: {this.state.user.id}, email: {this.state.user.email}, name: {this.state.user.name}
          </p>
        </div>
        <div className="pb-2">
          {/* {this.state.users[0].email} */}
          {/* {this.state.users[1].name} */}
          {/* <this.UserList /> */}
        </div>
      </div >
    );
  }
};