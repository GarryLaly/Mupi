import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {colors, dimens, fonts} from '@utils';
import {IconStar} from '@assets/icons';

const GeneralItem = ({title, photo, rating, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContainer}>
        <FastImage source={photo} style={styles.photo} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <FastImage source={IconStar} style={styles.icon} />
        <Text style={styles.info}>{rating === '' ? '0' : rating}/10 IMDb</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GeneralItem;

const styles = StyleSheet.create({
  container: {
    width: 159,
  },
  photoContainer: {
    borderRadius: dimens[6],
    backgroundColor: colors.white,
    width: 143,
    height: 212,
    overflow: 'hidden',
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // shadow android
    elevation: 3,
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: dimens[16],
    width: 143,
    marginTop: dimens[12],
    marginBottom: dimens[8],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: dimens[12],
    height: dimens[12],
    resizeMode: 'contain',
    marginRight: dimens[4],
  },
  info: {
    fontFamily: fonts.normal,
    color: colors.gray4,
    fontSize: dimens[12],
  },
});
