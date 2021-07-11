import React, {useState, useRef, useCallback} from 'react';
import {View, Button, StyleSheet, Alert, Linking} from 'react-native';

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

  const animeSearchHandler = useCallback(async () => {
    const anime = taskText
      .toLowerCase()
      .replace(/anime: */g, '')
      .replace(' ', '%20');
    const url = 'https://myanimelist.net/search/all?q=' + anime;
    await Linking.openURL(url);
  }, [taskText]);

  const addTaskButtonHandler = () => {
    const addTaskHelper = () => {
      setTaskText('');
      handler({
        id: taskID.current++,
        text: taskText,
        done: false,
      });
    };

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

    if (taskText.toLowerCase().startsWith('anime:')) {
      Alert.alert('Search MyAnimeList first?', '', [
        {
          text: 'YES',
          style: 'default',
          onPress: animeSearchHandler,
        },
        {
          text: 'NO',
          style: 'default',
          onPress: addTaskHelper,
        },
      ]);
      return;
    }

    addTaskHelper();
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
