import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  largeButtonContainer: {
    margin: 16,
    borderRadius: 8,
    padding: 8,
    height: 64,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  largeButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
});

type CustomButtonTypes = 'large';
type CustomButtonProps = {
  title: string;
  type: CustomButtonTypes;
  disabled?: boolean;
  color?: string;
  handlePress: () => void;
};

const CustomButton = (props: CustomButtonProps) => {
  const {title, type, disabled, handlePress} = props;

  const containerClasses = {
    large: styles.largeButtonContainer,
  };

  const textClasses = {
    large: styles.largeButtonText,
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled}>
      <View style={containerClasses[type]}>
        <Text style={textClasses[type]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
