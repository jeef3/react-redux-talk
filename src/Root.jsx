import React from 'react';

import App from './components/App';
import './base.css';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ lists: [{}] }), 2000);
  }

  render() {
    return <App lists={this.state.lists} />;
  }
}

export default Root;
