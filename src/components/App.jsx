import React from 'react';

const App = () => (
  <div
    style={{
      height: '100vh',
      background: '#4f5d75',

      display: 'grid',
      gridTemplateRows: '50px 1fr'
    }}
  >
    <div style={{ background: '#ec5766' }}>Mini Trello</div>

    <div>Lists will go here</div>
  </div>
);

export default App;
