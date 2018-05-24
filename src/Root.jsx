import React from 'react';

import AppState from './AppState';
import * as Api from './api';
import App from './components/App';
import './base.css';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      cards: [],
      listOrder: []
    };
  }

  componentDidMount() {
    Promise.all([Api.lists(), Api.cards(), Api.listOrder()]).then(
      ([lists, cards, listOrder]) => {
        this.setState({ lists, cards, listOrder });
      }
    );
  }

  render() {
    const { lists, cards, listOrder } = this.state;

    return (
      <AppState.Provider value={{ lists, cards, listOrder }}>
        <App />
      </AppState.Provider>
    );
  }
}

export default Root;
