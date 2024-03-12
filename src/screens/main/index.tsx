import React from 'react';
import {Text, View} from 'react-native';

import TaskList from '../../ui/TaskList';

import {User} from '../../types/User';
import {DailyEntry} from '../../types/DailyEntry';
import {getUserTasksAndTransform} from '../../lib/utils';

type MainScreenProps = {
  user: User;
  dailyEntry: DailyEntry;
};

const MainScreen = (props: MainScreenProps) => {
  const {user, dailyEntry} = props;
  console.log({user, dailyEntry});
  const transformedUserTasks = getUserTasksAndTransform({
    userId: user.id,
    dailyEntryId: dailyEntry.id,
  });

  return (
    <View>
      <Text>Main Screen</Text>
      <TaskList tasks={transformedUserTasks} />
    </View>
  );
};

export default MainScreen;
