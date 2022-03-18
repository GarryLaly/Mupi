import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, dimens, fonts} from '@utils';

const InfoText = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default InfoText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.normal,
    color: colors.gray4,
    fontSize: dimens[14],
    marginBottom: dimens[2],
  },
  value: {
    fontFamily: fonts.medium,
    color: colors.black,
    fontSize: dimens[14],
  },
});
