import React from 'react';
import {StyleSheet, View} from 'react-native';

import {InfoText} from '@components';

const InfoList = ({items}) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <InfoText key={index} {...item} />
      ))}
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
