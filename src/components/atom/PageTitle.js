import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, dimens, fonts} from '@utils';
import {IconBackWhite} from '@assets/icons';
import {Gap} from '@components';

const PageTitle = ({title, rightComponent, withoutBack}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapLeft}>
        {!withoutBack && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <Image source={IconBackWhite} style={styles.leftIcon} />
          </TouchableOpacity>
        )}
        {withoutBack && <Gap left={dimens[16]} />}
      </View>
      <Text style={styles.title}>{title}</Text>
      {rightComponent ? rightComponent : <View style={styles.leftIcon} />}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingHorizontal: dimens[16],
    paddingVertical: dimens[20],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    height: dimens[30],
    width: dimens[30],
  },
  wrapLeft: {},
  title: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: dimens[16],
  },
  isRightText: {
    fontFamily: fonts.normal,
    color: colors.blue,
    fontWeight: '500',
    fontSize: dimens[12],
    marginRight: dimens[16],
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    height: 40,
    width: 40,
  },
});