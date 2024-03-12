import task_entries from '../../db/task_entries';
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

  const transformedTasks = userTasks.map(task => ({
    ...task,
    completed: !!task_entries.find(
      taskEntry =>
        taskEntry.task_id === task.id &&
        taskEntry.daily_entry_id === dailyEntry &&
        taskEntry.completed === true,
    ),
  }));

  return transformedTasks;
};
