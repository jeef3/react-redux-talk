import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

ReactDOM.render(React.createElement(Root), document.getElementById('root'));

const endpoint = '';
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => {
    const {
      listeners: { source }
    } = data.icestats;
    // const { listeners } = source;

    console.log(source, listeners);
  });
