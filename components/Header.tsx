import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    marginTop: 56,
    marginBottom: 24,
    marginHorizontal: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
