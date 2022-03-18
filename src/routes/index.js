import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

// screen
import {MovieList, MovieDetail} from '@screens';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      function (error) {
        if (error.toJSON().message === 'Network Error') {
        } else {
          Toast.show(error?.toString() || 'error');
        }
        return Promise.reject(error);
      },
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MovieList">
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
