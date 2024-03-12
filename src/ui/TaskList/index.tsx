import React from 'react';
import {View, Text} from 'react-native';

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
      <View>
        {tasks.map(item => (
          <TaskContainer key={`task-${item.id}`} item={item} />
        ))}
      </View>
    </View>
  );
};

export default TaskList;
