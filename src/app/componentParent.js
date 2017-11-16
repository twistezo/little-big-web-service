import React from 'react';
import ChildA from './componentChildA';
import ChildB from './componentChildB';

module.exports = class Parent extends React.Component {
  render() {
    return (
      <div className="text-center pt-5">
        <ChildA />
        <ChildB />
      </div>
    );
  }
};

