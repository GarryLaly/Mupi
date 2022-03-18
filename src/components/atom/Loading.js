import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

const Loading = ({color, size}) => {
  return <ActivityIndicator color={color || 'black'} size={size || 'small'} />;
};

export default Loading;

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};
