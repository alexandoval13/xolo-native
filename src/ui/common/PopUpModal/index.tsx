import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    shadowOpacity: 0.2,
    shadowOffset: {height: -5, width: 0},
    shadowRadius: 20,
  },
});

type PopUpModalProps = {
  visible: boolean;
  handleClose: () => void;
  children: any;
};

const PopUpModal = ({visible, handleClose, children}: PopUpModalProps) => {
  const classes = styles;
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableOpacity style={classes.container} onPressOut={handleClose}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default PopUpModal;
