import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CategoryItem} from '@components';

const CategoryList = ({items}) => {
  return (
    <View style={styles.container}>
      {items?.map((item, index) => (
        <CategoryItem key={index}>{item}</CategoryItem>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
