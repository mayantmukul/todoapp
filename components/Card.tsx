import React from 'react';
import {View, StyleSheet} from 'react-native';
import Layout from '../styles/layout';

const Card = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: Layout.padding.default,
  },
});

export default Card;
