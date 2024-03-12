import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
  },
});

type CustomCheckBoxProps = {
  isChecked: boolean;
  height?: number;
  width?: number;
  toggleCheck: (arg?: boolean) => void;
};

const CustomCheckBox = (props: CustomCheckBoxProps) => {
  const {isChecked, height, width, toggleCheck} = props;

  const handlePress = () => {
    toggleCheck();
  };

  const interactiveStyles = {
    backgroundColor: isChecked ? 'black' : 'pink',
    width: width || 16,
    height: height || 16,
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{...styles.container, ...interactiveStyles}} />
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
