import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {RatingText} from '@components';
import {colors, dimens, fonts} from '@utils';

const GeneralItem = ({title, photo, rating, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContainer}>
        <FastImage source={photo} style={styles.photo} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <RatingText rating={rating} />
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
});
