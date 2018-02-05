import React from 'react';
import ReactDOM from 'react-dom';

import PlaygroundBootstrap from './app/react_playground/bootstrapTest';
import PlaygroundInheritance from './app/react_playground/componentParent';
import FirebaseAuth from './app/react_playground/firebase-auth';

import './index.scss';

ReactDOM.render(
  <div>
    <PlaygroundBootstrap />
    <PlaygroundInheritance />
    <FirebaseAuth />
  </div>,
  document.getElementById('root'),
);