import React from 'react';
import {View, Text, FlatList} from 'react-native';

import TaskContainer from './TaskContainer';
import {TaskListItem} from '../../types/Task';

type TaskListProps = {
  tasks: TaskListItem[];
};

const TaskList = (props: TaskListProps) => {
  const {tasks} = props;
  return (
    <View>
      <Text>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => {
          return <TaskContainer key={`task-${item.id}`} item={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TaskList;
