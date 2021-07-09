import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Layout from '../styles/layout';

const Header = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: Layout.default,
  text: {
    fontSize: 36,
  },
});

export default Header;
