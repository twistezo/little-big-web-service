import React from 'react';
import PlaygroundChildA from './componentChildA';
import PlaygroundForm from './form';

function ChildB(props) {
  return (
    <div>
      <p>
        Child - B - {props.childText}
      </p>
    </div>
  );
}

module.exports = class PlaygroundInheritance extends React.Component {
  render() {
    return (
      <div className="text-center pt-5">
        <h2>{'Components, props, inheritance testing'}</h2>
        <PlaygroundChildA childText="I'm props of component A" />
        <ChildB childText="I'm props of component B" />
        <h2>{'Multiple input testing'}</h2>
        <PlaygroundForm />
      </div>
    );
  }
};
