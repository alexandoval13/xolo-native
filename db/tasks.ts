/**
 * -- Task --
 * id: uuid
 * name: string
 * daytime: "general", "morning", "afternoon", "evening", "night"
 * subcategories: arr
 * category: "general", "special"
 * weekdays: 1, 2, 3, 4, 5, 6, 7
 * archived: boolean
 */

import {Task} from '../src/types/Task';

const tasks: Task[] = [
  {
    id: '2e9d3ae5-44de-4313-8a52-590592d4ee10',
    user_id: '05740c42-c540-4591-8384-a44f7e9fee02',
    name: 'Early Rise',
    daytime: 'general',
    categories: [],
    type: 'general',
  },
  {
    id: '3e9d3ae5-44de-4313-8a52-590592d4ee10',
    user_id: '05740c42-c540-4591-8384-a44f7e9fee02',
    name: 'Go for walk',
    daytime: 'general',
    categories: [],
    type: 'general',
  },
  {
    id: '4e9d3ae5-44de-4313-8a52-590592d4ee10',
    user_id: '05740c42-c540-4591-8384-a44f7e9fee02',
    name: 'Take a bath',
    daytime: 'general',
    categories: [],
    type: 'special',
  },
  {
    id: '5e9d3ae5-44de-4313-8a52-590592d4ee10',
    user_id: '05740c42-c540-4591-8384-a44f7e9fee02',
    name: 'Morning apple',
    daytime: 'morning',
    categories: [],
    type: 'general',
  },
  {
    id: '6e9d3ae5-44de-4313-8a52-590592d4ee10',
    user_id: '05740c42-c540-4591-8384-a44f7e9fee02',
    name: 'After work walk',
    daytime: 'evening',
    categories: [],
    type: 'general',
  },
];

export default tasks;
