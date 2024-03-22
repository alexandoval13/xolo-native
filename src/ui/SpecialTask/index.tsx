import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import PopUpModal from '../common/PopUpModal';
import {TaskListItem} from '../../types/Task';
import ArrowForwardIcon from '../../assets/mui/ArrowForwardIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    shadowOpacity: 0.2,
    shadowOffset: {height: -5, width: 0},
    shadowRadius: 20,
  },
  specialTaskContainer: {
    flexDirection: 'column',
    padding: 4,
    gap: 4,
    justifyContent: 'space-between',
  },
  specialTaskRow: {
    flexDirection: 'row',
    padding: 4,
    gap: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: 'white',
  },
});

type SpecialTaskProps = {
  specialTasks: TaskListItem[];
};

const SpecialTask = (props: SpecialTaskProps) => {
  const {specialTasks} = props;

  const [specialModalOpen, setSpecialModalOpen] = useState(false);

  const handlePressSpecialTask = () => {
    setSpecialModalOpen(true);
  };

  const handleCloseModal = () => {
    setSpecialModalOpen(false);
  };

  const classes = styles;

  return (
    <View>
      <PopUpModal
        visible={specialModalOpen}
        handleClose={handleCloseModal}
        closeButton>
        <FlatList
          data={specialTasks}
          renderItem={task => (
            <TouchableOpacity style={classes.specialTaskContainer}>
              <View style={classes.specialTaskRow}>
                <Text style={classes.text}>{task.item.name}</Text>
                <CustomButton
                  handlePress={handlePressSpecialTask}
                  type="icon"
                  icon={<ArrowForwardIcon height={16} />}
                />
              </View>
              <View style={classes.divider} />
            </TouchableOpacity>
          )}
        />
      </PopUpModal>
      <CustomButton
        title="Start Special Task"
        type="large"
        handlePress={handlePressSpecialTask}
      />
    </View>
  );
};

export default SpecialTask;
