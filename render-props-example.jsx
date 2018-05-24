import React from 'react';
import { render } from 'react-dom';

const MyComponent = ({ children }) => <strong>{children}</strong>;

const App = () => <MyComponent>Hello!</MyComponent>;

render(<App />, document.getElementById('root'));
