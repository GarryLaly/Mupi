import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {colors, dimens, fonts} from '@utils';
import {IconStar, IconClock} from '@assets/icons';

const HorizontalItem = ({title, photo, rating, crew, year}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={photo} style={styles.photo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Image source={IconStar} style={styles.icon} />
          <Text style={styles.info}>
            {rating === '' ? '0' : rating}/10 IMDb
          </Text>
        </View>
        <Text style={styles.crew}>{crew}</Text>
        <View style={styles.row}>
          <Image source={IconClock} style={styles.icon} />
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
  info: {
    fontFamily: fonts.normal,
    color: colors.gray4,
    fontSize: dimens[12],
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
