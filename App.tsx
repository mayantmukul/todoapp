import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import Header from './components/Header';
import Layout from './styles/layout';

/* Schema for a task
const task = {
  id: '23',
  text: 'This is a task',
  done: false
}
*/

const renderTaskItem = ({item}) => {
  return (
    <View style={styles.taskItem}>
      <Text>
        #{item.id} - {item.text} | {item.done ? 'done' : 'not done'}
      </Text>
    </View>
  );
};

const App = () => {
  const taskID = useRef(0);
  const [tasks, setTasks] = useState([] as any[]);
  const [taskText, setTaskText] = useState('');

  const addTaskTextInputHandler = (changedText: string) => {
    setTaskText(changedText);
  };

  const addTaskButtonHandler = () => {
    console.log(`Appending ${taskText} to tasks: ${tasks}`);
    setTasks(currentTasks => {
      return [
        {
          id: taskID.current++,
          text: taskText,
          done: false,
        },
        ...currentTasks,
      ];
    });

    // Clear the input
    setTaskText('');
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Todo" />
      <View style={styles.content}>
        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.addTaskInput}
            placeholder="What do you want to do today?"
            onChangeText={addTaskTextInputHandler}
            value={taskText}
          />
          <View style={styles.addTaskButton}>
            <Button title="Add" onPress={addTaskButtonHandler} />
          </View>
        </View>

        <Text>Hello World!</Text>

        <FlatList data={tasks} renderItem={renderTaskItem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  content: {
    ...Layout.default,
    ...{
      flex: 1,
      justifyContent: 'flex-start',
    },
  },
  addTaskContainer: {
    ...Layout.default,
    ...{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  addTaskInput: {
    ...Layout.default,
    ...{
      flex: 4,
    },
  },
  addTaskButton: {
    ...Layout.default,
    ...{
      flex: 1,
    },
  },
  taskItem: Layout.default,
});

export default App;
