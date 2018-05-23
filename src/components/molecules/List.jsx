import React from 'react';

import ListHeader from '../atoms/ListHeader';
import ListBody from '../atoms/ListBody';
import ListFooter from '../atoms/ListFooter';
import ListBackground from '../atoms/ListBackground';

export default ({ list }) => (
  <ListBackground>
    <ListHeader />

    <ListBody />

    <ListFooter />
  </ListBackground>
);
