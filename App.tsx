import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Header from './components/Header';
import Layout from './styles/layout';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header title="Todo" />
      <View style={styles.content}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  content: {
    ...Layout.default,
    ...{flex: 1},
  },
});

export default App;
