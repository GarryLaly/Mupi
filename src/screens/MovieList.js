import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import axios from 'axios';

import {
  PageTitle,
  SectionTitle,
  GeneralItem,
  HorizontalItem,
} from '@components';
import {IconDrawer, IconNotif} from '@assets';
import {colors, dimens, fonts} from '@utils';
import {formatAPIUrl} from '@config';

const MovieList = ({navigation}) => {
  const [movieNow, setMovieNow] = useState([]);
  const [isLoadingMovieNow, setIsLoadingMovieNow] = useState(false);
  const [moviePopular, setMoviePopular] = useState([]);
  const [isLoadingMoviePopular, setIsLoadingMoviePopular] = useState(false);

  const fetchMovieNow = async () => {
    try {
      setIsLoadingMovieNow(true);

      const response = await axios.get(formatAPIUrl('InTheaters'));
      const {items} = response.data;
      console.warn('fetchMovieNow', response.data);

      setIsLoadingMovieNow(false);
      setMovieNow(items);
    } catch (error) {
      setIsLoadingMovieNow(false);
      console.warn('error fetchMovieNow', error);
    }
  };

  const fetchMoviePopular = async () => {
    try {
      setIsLoadingMoviePopular(true);

      const response = await axios.get(formatAPIUrl('MostPopularMovies'));
      const {items} = response.data;
      console.warn('fetchMoviePopular', response.data);

      setIsLoadingMoviePopular(false);
      setMoviePopular(items);
    } catch (error) {
      setIsLoadingMoviePopular(false);
      console.warn('error fetchMoviePopular', error);
    }
  };

  const initialData = () => {
    fetchMovieNow();
    fetchMoviePopular();
  };

  useEffect(() => {
    initialData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <PageTitle title="Mupi" leftIcon={IconDrawer} rightIcon={IconNotif} />
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={initialData} />
        }>
        <SectionTitle title="Now Showing" onPress={() => {}} />
        <FlatList
          data={movieNow}
          horizontal
          style={styles.flatList}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <GeneralItem
              key={index}
              title={item.title}
              photo={{uri: item.image}}
              rating={item.imDbRating}
            />
          )}
          keyExtractor={item => item.id}
        />
        <SectionTitle title="Popular" onPress={() => {}} />
        <FlatList
          data={moviePopular.filter((item, index) => index < 10)}
          style={styles.flatList}
          renderItem={({item, index}) => (
            <HorizontalItem
              key={index}
              title={item.title}
              photo={{uri: item.image}}
              rating={item.imDbRating}
              crew={item.crew}
              year={item.year}
            />
          )}
          keyExtractor={item => item.id}
        />
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
  content: {
    paddingHorizontal: dimens[16],
    paddingVertical: dimens[8],
  },
  flatList: {
    marginRight: -dimens[16],
    paddingBottom: dimens[20],
  },
});
