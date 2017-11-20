import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

module.exports = class PlaygroundBootstrap extends React.Component {
  render() {
    return (
      <div className="text-center pt-5">
        <h2>{'Bootstrap testing'}</h2>
        <div className="row pt-5">
          <div className="col sm-3">
            <button type="button" className="btn btn-primary">Primary</button>
          </div>
          <div className="col sm-3">
            <button type="button" className="btn btn-secondary">Secondary</button>
          </div>
          <div className="col sm-3">
            <button type="button" className="btn btn-success">Success</button>
          </div>
          <div className="col sm-3">
            <button type="button" className="btn btn-danger">Danger</button>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col sm-3">
            <button type="button" className="btn btn-warning">Warning</button>
          </div>
          <div className="col sm-3">
            <button type="button" className="btn btn-info">Info</button>
          </div>
          <div className="col sm-3">
            <button type="button" className="btn btn-light">Light</button>
          </div>
          <div className="col sm-3">
            <button type="button" className="btn btn-dark">Dark</button>
          </div>
        </div>
      </div>
    );
  }
};
