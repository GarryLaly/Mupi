import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import axios from 'axios';

import {store, persistor} from '@store/store';

// local
import Routes from '@routes';
import {baseUrl} from '@config';

axios.defaults.baseURL = baseUrl;

// to indicate that inactive screens should be detached from the view hierarchy to save memory
enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
