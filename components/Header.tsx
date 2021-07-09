import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Layout from '../styles/layout';
import TextStyle from '../styles/text';

const Header = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    marginTop: Layout.margin.xxlarge,
    marginBottom: Layout.margin.mid,
    marginHorizontal: Layout.margin.mid,
    fontSize: TextStyle.fontSize.xxlarge,
    color: 'white',
    ...Platform.select({
      ios: {
        fontFamily: TextStyle.font.default,
        fontWeight: '900',
      },
      android: {
        fontFamily: TextStyle.font.defaultBold,
      },
    }),
  },
});

export default Header;
