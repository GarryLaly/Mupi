import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, dimens, fonts} from '@utils';

const PageTitle = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onPress && (
        <TouchableOpacity style={styles.action} onPress={onPress}>
          <Text style={styles.actionText}>See More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingBottom: dimens[20],
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
    color: colors.blue,
    fontSize: dimens[18],
  },
  action: {
    borderWidth: 1,
    borderRadius: dimens[50],
    borderColor: colors.gray3,
    paddingVertical: dimens[4],
    paddingHorizontal: dimens[8],
  },
  actionText: {
    fontFamily: fonts.normal,
    color: colors.gray2,
    fontSize: dimens[12],
  },
});
