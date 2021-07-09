import React, {useState, useRef} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

import Input from './Input';
import Layout from '../styles/layout';

const AddTask = ({handler}) => {
  const taskID = useRef(0);
  const [taskText, setTaskText] = useState('');

  const addTaskTextInputHandler = (changedText: string) => {
    setTaskText(changedText);
  };

  const addTaskButtonHandler = () => {
    if (!taskText) {
      Alert.alert('Cannot add an empty task', '', [
        {
          text: 'OK',
          style: 'default',
          onPress: () => {},
        },
      ]);
      return;
    }

    setTaskText('');
    handler({
      id: taskID.current++,
      text: taskText,
      done: false,
    });
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="What do you want to do today?"
        onChangeText={addTaskTextInputHandler}
        value={taskText}
      />
      <View style={styles.button}>
        <Button title="Add" onPress={addTaskButtonHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Layout.padding.default,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    flex: 4,
  },
  button: {
    flex: 1,
    padding: Layout.padding.default,
  },
});

export default AddTask;
