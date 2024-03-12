type DayTime = 'general' | 'morning' | 'afternoon' | 'evening' | 'night';

type TaskType = 'general' | 'special';

export type Task = {
  id: string;
  user_id: string;
  name: string;
  daytime: DayTime;
  categories: string[];
  type: TaskType;
};

export interface TaskListItem extends Task {
  completed: boolean;
}
