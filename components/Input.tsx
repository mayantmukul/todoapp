import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Layout from '../styles/layout';
import TextStyle from '../styles/text';

const Input = (props: any) => {
  // Disable hardware keyboard on the emulator to get software keyboard on iOS
  //   https://stackoverflow.com/a/34977682

  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    padding: Layout.padding.default,
    fontSize: TextStyle.fontSize.default,
    fontFamily: TextStyle.font.default,
  },
});

export default Input;
