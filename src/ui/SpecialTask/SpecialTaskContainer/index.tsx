import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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

const SpecialTaskContainer = ({item}: {item: TaskListItem}) => {
  const handleSelect = () => {
    console.log('wahoooo');
  };

  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={styles.container}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialTaskContainer;
