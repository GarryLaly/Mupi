import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import FastImage from 'react-native-fast-image';

import {
  PageTitle,
  SectionTitle,
  Gap,
  RatingText,
  CategoryList,
  InfoList,
  CastItem,
} from '@components';
import {colors, dimens, fonts} from '@utils';
import {IconMenu, IconPlay, IconBookmark} from '@assets';
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
      <View style={styles.photoContainer}>
        <FastImage source={{uri: detail?.image}} style={styles.photo} />
        <View style={styles.photoOverlay} />
        <TouchableOpacity style={styles.playContainer} onPress={() => {}}>
          <View style={styles.playIconContainer}>
            <FastImage source={IconPlay} style={styles.playIcon} />
          </View>
          <Text style={styles.playText}>Play Trailer</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <PageTitle backgroundColor="transparent" rightIcon={IconMenu} />
        </View>
      </View>
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={fetchDetail} />
        }>
        <View style={styles.row2}>
          <Text style={styles.title}>{detail?.fullTitle}</Text>
          <FastImage source={IconBookmark} style={styles.icon} />
        </View>
        <RatingText rating={detail?.imDbRating} />
        <Gap top={dimens[16]} />
        <CategoryList items={detail?.genreList?.map(item => item.value)} />
        <Gap top={dimens[16]} />
        <InfoList
          items={[
            {
              label: 'Length',
              value: '2h 28min',
            },
            {
              label: 'Language',
              value: detail?.languages,
            },
            {
              label: 'Rating',
              value: detail?.contentRating,
            },
          ]}
        />
        <Gap top={dimens[24]} />
        <SectionTitle title="Description" />
        <Text style={styles.description}>{detail?.plot}</Text>
        <Gap top={dimens[24]} />
        <SectionTitle title="Cast" onPress={() => {}} />
        <FlatList
          data={detail?.actorList}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          renderItem={({item, index}) => (
            <CastItem
              key={index}
              title={item.name}
              photo={{uri: item.image}}
              onPress={() => {}}
            />
          )}
          keyExtractor={item => item.id}
        />
        <Gap top={dimens[24]} />
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
  header: {
    position: 'absolute',
    width: '100%',
    top: dimens[32],
    left: 0,
  },
  photoContainer: {
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  photoOverlay: {
    backgroundColor: colors.blue,
    opacity: 0.2,
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconContainer: {
    backgroundColor: colors.white,
    borderRadius: dimens[60],
    width: dimens[45],
    height: dimens[45],
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: dimens[24],
    height: dimens[24],
    resizeMode: 'contain',
  },
  playText: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: dimens[14],
    marginTop: dimens[8],
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: dimens[8],
    borderTopRightRadius: dimens[8],
    padding: dimens[24],
    marginTop: -dimens[32],
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: dimens[24],
    maxWidth: 200,
    marginBottom: dimens[8],
  },
  icon: {
    width: dimens[24],
    height: dimens[24],
    resizeMode: 'contain',
  },
  description: {
    fontFamily: fonts.normal,
    color: colors.gray4,
    fontSize: dimens[14],
    lineHeight: dimens[28],
    marginTop: -dimens[12],
  },
  flatList: {
    marginTop: -dimens[4],
    marginRight: -dimens[16],
    paddingBottom: dimens[20],
  },
});
