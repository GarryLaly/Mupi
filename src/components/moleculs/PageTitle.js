import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, dimens, fonts} from '@utils';
import {IconBack} from '@assets/icons';
import {Gap} from '@components';

const PageTitle = ({
  title,
  backgroundColor,
  leftIcon,
  leftIconPress,
  rightIcon,
  rightIconPress,
  withoutBack,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, backgroundColor ? {backgroundColor} : {}]}>
      {leftIcon ? (
        <View>
          <TouchableOpacity onPress={leftIconPress}>
            <Image source={leftIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {!withoutBack && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={IconBack} style={styles.icon} />
            </TouchableOpacity>
          )}
          {withoutBack && <Gap left={dimens[16]} />}
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity onPress={rightIconPress}>
          <Image source={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: dimens[16],
    paddingVertical: dimens[20],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: dimens[24],
    width: dimens[24],
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: dimens[18],
  },
});
