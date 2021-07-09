import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Checkbox from '@react-native-community/checkbox';
import Layout from '../styles/layout';

// TODO: Allow re-enabling a done task?
const TaskDisplay = (props: any) => {
  // I don't need to maintain this is as a state in this component
  const isDone = props.item.done;

  const pressHandler = () => {
    if (!isDone) {
      props.onPress();
    }
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
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <Checkbox
          disabled={isDone}
          onValueChange={pressHandler}
          value={isDone}
        />
      </View>

      <Text style={textStyle}>{props.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layout.default,
    ...{
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  },
  checkbox: {
    ...Layout.default,
    ...{
      width: '20%',
    },
  },
  text: {
    ...Layout.default,
    ...{
      width: '80%',
    },
  },
});

export default TaskDisplay;
