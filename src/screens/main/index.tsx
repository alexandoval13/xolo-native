import React from 'react';
import {Text, View} from 'react-native';

import TaskList from '../../ui/TaskList';

import {User} from '../../types/User';
import {DailyEntry} from '../../types/DailyEntry';
import {getUserTasksAndTransform} from '../../lib/utils';
import SpecialTask from '../../ui/SpecialTask';

type MainScreenProps = {
  user: User;
  dailyEntry: DailyEntry;
};

const MainScreen = (props: MainScreenProps) => {
  const {user, dailyEntry} = props;

  const {transformedDailyTasks, transformedSpecialTasks} =
    getUserTasksAndTransform({
      userId: user.id,
      dailyEntryId: dailyEntry.id,
    });

  return (
    <View>
      <Text>Main Screen</Text>
      <TaskList tasks={transformedDailyTasks} />
      <SpecialTask specialTasks={transformedSpecialTasks} />
    </View>
  );
};

export default MainScreen;
