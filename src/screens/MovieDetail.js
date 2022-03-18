import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

import {PageTitle} from '@components';
import {colors, dimens, fonts} from '@utils';
import {IconMenu} from '@assets';
import {formatAPIUrl} from '@config';

const MovieDetail = ({navigation, route}) => {
  const {detailID} = route.params;
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDetail = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(formatAPIUrl('Title', detailID));
      const data = response.data;
      console.warn('fetchDetail', response.data);

      setIsLoading(false);
      setDetail(data);
    } catch (error) {
      setIsLoading(false);
      Toast.show(error);
      console.warn('error fetchDetail', error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle="light-content"
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={fetchDetail} />
        }>
        <Image source={{uri: detail?.image}} style={styles.photo} />
        <View style={styles.header}>
          <PageTitle backgroundColor="transparent" rightIcon={IconMenu} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: dimens[16],
    paddingVertical: dimens[8],
  },
  header: {
    position: 'absolute',
    width: '100%',
    top: dimens[32],
    left: 0,
  },
  photo: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
