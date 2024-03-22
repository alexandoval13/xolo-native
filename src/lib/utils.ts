import task_entries from '../../db/task_entries';
import {TaskListItem} from '../types/Task';
import {getDailyEntryId} from './api/getDailyEntryId';
import getUserTasks from './api/getUserTasks';

export const noop = () => {};

export const getUserTasksAndTransform = ({
  userId,
  dailyEntryId,
}: {
  userId: string;
  dailyEntryId: string;
}) => {
  const dailyEntry = dailyEntryId ?? getDailyEntryId(new Date());

  const userTasks = getUserTasks(userId);

  const transformedDailyTasks: TaskListItem[] = [];
  const transformedSpecialTasks: TaskListItem[] = [];

  userTasks.forEach(task => {
    if (task.type === 'general') {
      transformedDailyTasks.push({
        ...task,
        completed: !!task_entries.find(
          taskEntry =>
            taskEntry.task_id === task.id &&
            taskEntry.daily_entry_id === dailyEntry &&
            taskEntry.completed === true,
        ),
      });
    } else if (task.type === 'special') {
      transformedSpecialTasks.push({
        ...task,
        completed: !!task_entries.find(
          taskEntry =>
            taskEntry.task_id === task.id &&
            taskEntry.daily_entry_id === dailyEntry &&
            taskEntry.completed === true,
        ),
      });
    }
  });

  return {transformedDailyTasks, transformedSpecialTasks};
};

export const printMessage = (message: string) => {
  console.log(`\n${message}\n`);
};
