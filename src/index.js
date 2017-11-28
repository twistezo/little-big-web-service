import React from 'react';
import ReactDOM from 'react-dom';

import PlaygroundBootstrap from './app/react_playground/bootstrapTest';
import PlaygroundInheritance from './app/react_playground/componentParent';

import './index.scss';

ReactDOM.render(
  <div>
    <PlaygroundBootstrap />
    <PlaygroundInheritance />
  </div>,
  document.getElementById('root'),
);