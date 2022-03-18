import React from 'react';
import {View} from 'react-native';

const Gap = ({top, bottom, left, right}) => {
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
      }}
    />
  );
};

export default Gap;
