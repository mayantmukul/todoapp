import React, {useState, useRef} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Card from './Card';
import Input from './Input';
import Layout from '../styles/layout';
import Colors from '../styles/colors';

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
    <Card style={styles.container}>
      <Input
        style={styles.input}
        placeholder="What do you want to do today?"
        placeholderTextColor={Colors.textMuted}
        onChangeText={addTaskTextInputHandler}
        value={taskText}
      />

      {/* <Icon name="pluscircle" /> */}
      <View style={styles.button}>
        <Button title="Add" onPress={addTaskButtonHandler} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Layout.padding.default,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.textBg,
  },
  input: {
    flex: 4,
    color: Colors.textMain,
  },
  button: {
    flex: 1,
    padding: Layout.padding.default,
  },
});

export default AddTask;
