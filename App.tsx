import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

import TaskDisplay from './components/TaskDisplay';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Card from './components/Card';
import Layout from './styles/layout';
import Colors from './styles/colors';

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
      <TaskDisplay
        item={item}
        onPress={value => taskChangeHandler(item, value)}
      />
    );
  };

  const taskChangeHandler = (taskItem: any, newDone: boolean) => {
    setTasks(currentTasks => {
      // Find the task with the same id
      const newTasks = currentTasks.filter(item => item.id !== taskItem.id);

      // Update the task's status
      taskItem.done = newDone;

      // Push the task to the end of the array if done, push to top otherwise
      if (newDone) newTasks.push(taskItem);
      else newTasks.unshift(taskItem);

      // TODO: This makes all TaskDisplay in the list to re-render
      return newTasks;
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Tasks" />
      <View style={styles.content}>
        <Card>
          <AddTask handler={addTaskHandler} />
        </Card>

        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={renderTaskItem}
            contentContainerStyle={styles.listContentContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    ...Layout.default,
    ...{
      flex: 1,
      justifyContent: 'flex-start',
    },
  },
  listContainer: {
    ...Layout.default,
    ...{
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flex: 1,
      width: '100%',
      borderRadius: 4,
      margin: 4,
      backgroundColor: Colors.background,
    },
  },
  listContentContainer: {
    flexGrow: 1,
  },
});

export default App;
