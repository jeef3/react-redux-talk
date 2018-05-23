import React from 'react';

import * as Api from './api';
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
    Promise.all([Api.lists(), Api.cards(), Api.listOrder()]).then(
      ([lists, cards, listOrder]) => {
        this.setState({ lists, cards, listOrder });
      }
    );
  }

  render() {
    const { lists, cards, listOrder } = this.state;

    return <App lists={lists} cards={cards} listOrder={listOrder} />;
  }
}

export default Root;
