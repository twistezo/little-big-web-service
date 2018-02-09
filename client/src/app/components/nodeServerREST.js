import React from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:8443' // HTTPS
});

class NodeServerREST extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isServerActive: false,
      shouldUpdateUsersFromAPI: true,
      createUserName: '',
      createUserAge: '',
      readUserId: '',
      readUser: {},
      readUsers: [],
      updateUserId: '',
      updateUserName: '',
      updateUserAge: '',
      deleteUserId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReadUser = this.handleReadUser.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    this.readUsersFromAPI();
  }

  componentDidUpdate() {
    if (this.state.shouldUpdateUsersFromAPI === true) {
      this.readUsersFromAPI();
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCreateUser(event) {
    this.createUser(this.state.createUserName, this.state.createUserAge);
    event.preventDefault();
  }

  handleReadUser(event) {
    this.readUserById(this.state.readUserId);
    event.preventDefault();
  }

  handleUpdateUser(event) {
    this.updateUserById(this.state.updateUserId, this.state.updateUserName,
      this.state.updateUserAge);
    event.preventDefault();
  }

  handleDeleteUser(event) {
    this.deleteUserById(this.state.deleteUserId);
    event.preventDefault();
  }

  createUser(name, age) {
    axiosInstance.post('/users/', {
      name, age
    }).then(() => {
      this.setState({ shouldUpdateUsersFromAPI: true, createUserName: '', createUserAge: '' });
    }).catch(error => {
      console.log(error);
    });
  }

  readUsersFromAPI() {
    axiosInstance.get('/users').then(response => {
      this.setState({ readUsers: response.data, isServerActive: true, shouldUpdateUsersFromAPI: false });
    }).catch(error => {
      this.setState({ isServerActive: false });
      if (error.response) {
        console.log('error.response.data: ' + error.response.data + '\nerror.response.status: ' +
          error.response.status + '\nerror.response.headers: ' + error.response.headers);
      } else if (error.request) {
        console.log('error.request: ' + error.request);
      } else {
        console.log('Else error.message: ', error.message);
      }
      console.log('error.config: ' + error.config);
    });
  }

  readUserById(id) {
    axiosInstance.get('/users/' + id).then(response => {
      this.setState({ readUser: response.data, readUserId: '' });
    }).catch(error => {
      console.log(error);
    });
  }

  updateUserById(id, name, age) {
    axiosInstance.put('/users/' + id, {
      name, age
    }).then(() => {
      this.setState({
        updateUserId: '', updateUserName: '',
        updateUserAge: '', shouldUpdateUsersFromAPI: true
      });
    }).catch(error => {
      console.log(error);
    });
  }

  deleteUserById(id) {
    axiosInstance.delete('/users/' + id).then(() => {
      this.setState({ shouldUpdateUsersFromAPI: true, deleteUserId: '' });
    }).catch(error => {
      console.log(error);
    });
  }

  ServerStatus(props) {
    if (props.status === true) {
      return (
        <h6>Server status: OK</h6>
      );
    } else if (props.status === false) {
      return (
        <h6>Server status: Not Responding</h6>
      );
    }
  }

  UsersTable(props) {
    const columns = [{
      dataField: '_id',
      text: 'ID'
    }, {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'age',
      text: 'Age'
    }];
    return (
      <BootstrapTable keyField="_id" data={props.data} columns={columns} />
    );
  }

  CreateUserForm(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <div className="row pb-2">
          <div className="col-md-6 mx-auto pb-2">
            <input
              name="createUserName" type="text" className="form-control"
              value={props.userName} onChange={props.onHandleChange}
              placeholder="Type user name" />
          </div>
          <div className="col-md-6 mx-auto pb-2">
            <input
              name="createUserAge" type="text" className="form-control"
              value={props.userAge} onChange={props.onHandleChange}
              placeholder="Type user age" />
          </div>
        </div>
        <div className="pt-2 pb-2">
          <input type="submit" className="btn btn-danger" value="Create" />
        </div>
      </form>
    );
  }

  ReadUserForm(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <div className="row pb-2">
          <div className="col-md-10 mx-auto pb-2">
            <input
              name="readUserId" type="text" className="form-control"
              value={props.userId} onChange={props.onHandleChange}
              placeholder="Type user id" />
          </div>
        </div>
        <div className="pt-2 pb-2">
          <input type="submit" className="btn btn-danger" value="Read" />
        </div>
      </form>
    );
  }

  UpdateUserForm(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <div className="row pb-2">
          <div className="col-md-6 mx-auto pb-2">
            <input
              name="updateUserId" type="text" className="form-control"
              value={props.userId} onChange={props.onHandleChange}
              placeholder="Type user Id" />
          </div>
          <div className="col-md-6 mx-auto pb-2">
            <input
              name="updateUserName" type="text" className="form-control"
              value={props.userName} onChange={props.onHandleChange}
              placeholder="Type user name" />
          </div>
          <div className="col-md-6 mx-auto pb-2">
            <input
              name="updateUserAge" type="text" className="form-control"
              value={props.userAge} onChange={props.onHandleChange}
              placeholder="Type user age" />
          </div>
        </div>
        <div className="pt-2 pb-2">
          <input type="submit" className="btn btn-danger" value="Update" />
        </div>
      </form>
    );
  }

  DeleteUserForm(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <div className="row pb-2">
          <div className="col-md-10 mx-auto pb-2">
            <input
              name="deleteUserId" type="text" className="form-control"
              value={props.userId} onChange={props.onHandleChange}
              placeholder="Type user id" />
          </div>
        </div>
        <div className="pt-2 pb-2">
          <input type="submit" className="btn btn-danger" value="Delete" />
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="text-center pt-5">
        <div className="col-md-8 mx-auto">
          <div className="pb-2">
            <h4>{'Read data from Node.JS RESTful API'}</h4>
            <this.ServerStatus status={this.state.isServerActive} />
            <h6>{'If not responding check readme on github'}</h6>
          </div>
          <hr />
          <div className="pb-2">
            <h4>{'Users from server API'}</h4>
          </div>
          <div className="pb-2">
            <this.UsersTable data={this.state.readUsers} />
          </div>
          <hr />
          <div className="pb-2">
            <h4>{'Create user'}</h4>
          </div>
          <this.CreateUserForm
            onSubmit={this.handleCreateUser} userName={this.state.createUserName}
            userAge={this.state.createUserAge} onHandleChange={this.handleChange} />
          <hr />
          <div className="pb-2">
            <h4>{'Read user'}</h4>
          </div>
          <div>
            <this.ReadUserForm
              onSubmit={this.handleReadUser} userId={this.state.readUserId}
              onHandleChange={this.handleChange} />
            <div>
              <p>ID: {this.state.readUser._id}</p>
              <p>Name: {this.state.readUser.name}</p>
              <p>Age: {this.state.readUser.age}</p>
            </div>
          </div>
          <hr />
          <div className="pb-2">
            <h4>{'Update user'}</h4>
          </div>
          <this.UpdateUserForm
            onSubmit={this.handleUpdateUser} userId={this.state.updateUserId}
            userName={this.state.updateUserName} userAge={this.state.updateUserAge}
            onHandleChange={this.handleChange} />
          <hr />
          <div className="pb-2">
            <h4>{'Delete user'}</h4>
          </div>
          <this.DeleteUserForm
            onSubmit={this.handleDeleteUser} userId={this.state.deleteUserId}
            onHandleChange={this.handleChange} />
        </div>
      </div >
    );
  }
}

export default NodeServerREST;
