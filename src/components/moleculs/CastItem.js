import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {colors, dimens, fonts} from '@utils';

const CastItem = ({title, photo, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContainer}>
        <FastImage source={photo} style={styles.photo} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    width: 86,
  },
  photoContainer: {
    borderRadius: dimens[6],
    backgroundColor: colors.white,
    width: dimens[72],
    height: dimens[72],
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: fonts.normal,
    color: colors.black,
    fontSize: dimens[14],
    width: dimens[72],
    marginTop: dimens[8],
  },
});
