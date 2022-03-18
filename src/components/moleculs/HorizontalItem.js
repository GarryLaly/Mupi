import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {RatingText} from '@components';
import {colors, dimens, fonts} from '@utils';
import {IconClock} from '@assets';

const HorizontalItem = ({title, photo, rating, crew, year, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContainer}>
        <FastImage source={photo} style={styles.photo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <RatingText rating={rating} />
        <Text style={styles.crew}>{crew}</Text>
        <View style={styles.row}>
          <FastImage source={IconClock} style={styles.icon} />
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: dimens[16],
  },
  photoContainer: {
    borderRadius: dimens[6],
    backgroundColor: colors.white,
    width: 85,
    height: 120,
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
  content: {
    flex: 1,
    paddingHorizontal: dimens[16],
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: dimens[16],
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
  crew: {
    fontFamily: fonts.normal,
    color: colors.black,
    fontSize: dimens[14],
    marginVertical: dimens[8],
  },
  year: {
    fontFamily: fonts.normal,
    color: colors.black,
    fontSize: dimens[14],
  },
});
