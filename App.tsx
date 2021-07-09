import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

import TaskDisplay from './components/TaskDisplay';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Layout from './styles/layout';

/**
 * Schema for a task
 * const task = {
 *   id: '23',
 *   text: 'This is a task',
 *   done: false
 * }
 */

const App = () => {
  const [tasks, setTasks] = useState([] as any[]);

  const addTaskHandler = (newItem: any) => {
    setTasks(currentTasks => {
      return [newItem, ...currentTasks];
    });
  };

  const renderTaskItem = ({item}) => {
    return (
      <TaskDisplay item={item} onPress={() => taskCompleteHandler(item)} />
    );
  };

  const taskCompleteHandler = (taskItem: any) => {
    setTasks(currentTasks => {
      // Find the task with the same id
      const newTasks = currentTasks.filter(item => item.id !== taskItem.id);

      // Mark that task as done
      taskItem.done = true;

      // Push the task to the end of the array
      newTasks.push(taskItem);

      // TODO: This makes all TaskDisplay in the list to re-render
      return newTasks;
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Todo" />
      <View style={styles.content}>
        <AddTask handler={addTaskHandler} />
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
});

export default App;
