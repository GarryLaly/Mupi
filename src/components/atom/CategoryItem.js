import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, dimens, fonts} from '@utils';

const CategoryItem = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2,
    borderRadius: dimens[50],
    paddingVertical: dimens[4],
    paddingHorizontal: dimens[12],
    marginRight: dimens[8],
  },
  text: {
    fontFamily: fonts.bold,
    color: colors.blue3,
    textTransform: 'uppercase',
    fontSize: dimens[12],
  },
});
