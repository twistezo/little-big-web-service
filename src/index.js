import React from 'react';
import ReactDOM from 'react-dom';

import BootstrapTest from './app/bootstrapTest';
import Parent from './app/componentParent';

import './index.scss';

ReactDOM.render(
  <div>
    <BootstrapTest />
    <Parent />
  </div>,
  document.getElementById('root'),
);

