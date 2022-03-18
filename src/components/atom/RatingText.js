import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {colors, dimens, fonts} from '@utils';
import {IconStar} from '@assets';

const RatingText = ({rating}) => {
  return (
    <View style={styles.container}>
      <FastImage source={IconStar} style={styles.icon} />
      <Text style={styles.text}>{rating}/10 IMDb</Text>
    </View>
  );
};

export default RatingText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: dimens[12],
    height: dimens[12],
    resizeMode: 'contain',
    marginRight: dimens[4],
  },
  text: {
    fontFamily: fonts.normal,
    color: colors.gray4,
    fontSize: dimens[12],
  },
});
