import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Layout from '../styles/layout';

const Input = (props: any) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: Layout.default,
});

export default Input;
