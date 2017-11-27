import React from 'react';
import PlaygroundChildA from './componentChildA';
import PlaygroundForm from './form';
import FirebaseCRUD from './firebaseCRUD';

function ChildB(props) {
  return (
    <div>
      <p>
        Child - B - {props.childText}
      </p>
    </div>
  );
}

export default class PlaygroundInheritance extends React.Component {
  render() {
    return (
      <div className="text-center pt-5">
        <h2>{'Components, props, inheritance testing'}</h2>
        <PlaygroundChildA childText="I'm props of component A" />
        <ChildB childText="I'm props of component B" />
        <h2>{'Multiple input testing'}</h2>
        <PlaygroundForm />
        <h2>{'Firebase CRUD testing'}</h2>
        <FirebaseCRUD />
      </div>
    );
  }
};
