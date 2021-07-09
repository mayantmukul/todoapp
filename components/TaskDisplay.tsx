import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Card from './Card';
import Checkbox from '@react-native-community/checkbox';
import Layout from '../styles/layout';

const TaskDisplay = (props: any) => {
  // I don't need to maintain this is as a state in this component
  const isDone = props.item.done;

  const pressHandler = (value: boolean) => {
    props.onPress(value);
  };

  /*
  useEffect(() => {
    console.log('rerendering task display again');
  });
  */

  let textStyle = styles.text;
  if (isDone) {
    textStyle = {...styles.text, ...{textDecorationLine: 'line-through'}};
  }

  return (
    <Card style={styles.card}>
      <View style={styles.checkbox}>
        <Checkbox onValueChange={pressHandler} value={isDone} />
      </View>

      <Text style={textStyle}>{props.item.text}</Text>
    </Card>
  );

  /*
    <View style={styles.container}>
      
    </View>
    */
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: Layout.padding.default,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkbox: {
    width: '20%',
    padding: Layout.padding.default,
  },
  text: {
    width: '80%',
    padding: Layout.padding.default,
  },
});

export default TaskDisplay;
