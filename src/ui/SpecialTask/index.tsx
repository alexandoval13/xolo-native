import React, {useState} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';

const SpecialTask = () => {
  const [specialModalOpen, setSpecialModalOpen] = useState(false);

  const handlePressSpecialTask = () => {
    setSpecialModalOpen(true);
  };

  const handleCloseModal = () => {
    setSpecialModalOpen(false);
  };

  return (
    <View>
      <Modal visible={specialModalOpen} animationType="slide">
        <View>
          <Text>Special Task Modal</Text>
          <Button title="x" onPress={handleCloseModal} color="orange" />
        </View>
      </Modal>
      <Text>Special Task</Text>
      <TouchableOpacity onPress={handlePressSpecialTask}>
        <View>
          <Text>Start Special Task</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SpecialTask;
