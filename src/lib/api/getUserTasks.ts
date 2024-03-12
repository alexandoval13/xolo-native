import tasks from '../../../db/tasks';
import {Task} from '../../types/Task';

const getUserTasks = (userId: Task['user_id']) => {
  const userTasks = tasks.filter(task => {
    console.log({userId, taskUser: task.user_id});
    return userId === task.user_id;
  });

  return userTasks;
};

export default getUserTasks;
