import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomButton from '../CustomButton';
import CloseIcon from '../../../assets/mui/CloseIcon';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    shadowOpacity: 0.2,
    shadowOffset: {height: -5, width: 0},
    shadowRadius: 20,
  },
  container: {
    height: 360,
    paddingTop: 48,
    paddingBottom: 24,
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
    backgroundColor: 'pink',
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});

type PopUpModalProps = {
  visible: boolean;
  handleClose: () => void;
  children: any;
  closeButton?: boolean;
};

const PopUpModal = ({
  visible,
  handleClose,
  children,
  closeButton,
}: PopUpModalProps) => {
  const classes = styles;
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableOpacity style={classes.main} onPressOut={handleClose}>
        <TouchableWithoutFeedback>
          <View style={classes.container}>
            {closeButton && (
              <View style={classes.closeButton}>
                <CustomButton
                  type="icon"
                  icon={<CloseIcon height={16} width={16} />}
                  handlePress={handleClose}
                />
              </View>
            )}
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default PopUpModal;
