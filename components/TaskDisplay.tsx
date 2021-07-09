import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Layout from '../styles/layout';

const TaskDisplay = (props: any) => {
  return (
    <TouchableOpacity {...props} onPress={props.onPress}>
      <View style={styles.container}>
        <Text>
          #{props.item.id} - {props.item.text} |{' '}
          {props.item.done ? 'done' : 'not done'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: Layout.default,
});

export default TaskDisplay;
