import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {PageTitle} from '@components';
import {colors, dimens, fonts} from '@utils';

const MovieList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <PageTitle title="Mupi" />
      <ScrollView style={styles.content}>
        <Text
          style={styles.headerTitleText}
          onPress={() => navigation.navigate('MovieDetail')}>
          MovieList
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTitleText: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: dimens[22],
    lineHeight: dimens[28],
    marginTop: dimens[12],
    marginBottom: dimens[40],
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: dimens[16],
    paddingVertical: dimens[8],
  },
});
