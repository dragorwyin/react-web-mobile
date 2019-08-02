import React from 'react';
import { StyleSheet, View } from 'react-native';
import Clicker from './components/Clicker/Clicker';

import rootReducers from "./redux/rootReducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const store = createStore(rootReducers);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Clicker></Clicker>
      </View>
    </Provider>
  );
}

