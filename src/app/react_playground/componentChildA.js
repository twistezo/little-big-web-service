import React from 'react';

export default class PlaygroundChildA extends React.Component {
  render() {
    return (
      <div>
        <p>
          Child - A - {this.props.childText}
        </p>
      </div>
    );
  }
};