import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../styles/colors';

import TextStyle from '../styles/text';

const TText = props => {
  return (
    <Text {...props} style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: TextStyle.font.default,
    fontSize: TextStyle.fontSize.default,
    color: Colors.textMain,
  },
});

export default TText;
