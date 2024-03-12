import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomCheckBox from '../../common/CustomCheckBox';
import {TaskListItem} from '../../../types/Task';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    columnGap: 8,
  },
});

const TaskContainer = ({item}: {item: TaskListItem}) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.completed);

  const handleToggleCheck = () => {
    setIsChecked(prev => {
      // query update
      // if successful
      return !prev;

      // otherwise
      // return prev
    });
  };

  return (
    <View style={styles.container}>
      <CustomCheckBox isChecked={isChecked} toggleCheck={handleToggleCheck} />
      <Text>{item.name}</Text>
    </View>
  );
};

export default TaskContainer;
