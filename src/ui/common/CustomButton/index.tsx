import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type StylesProps = {
  isDisabled?: boolean;
  backgroundColor?: string;
};

const largeButtonStyles = (props: StylesProps) => {
  const {isDisabled, backgroundColor} = props;

  return StyleSheet.create({
    container: {
      borderRadius: 4,
      padding: 8,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: isDisabled ? 'gray' : backgroundColor || 'pink',
      opacity: isDisabled ? 0.5 : 1,
    },
    text: {
      color: 'white',
      fontWeight: '600',
      fontSize: 24,
    },
  });
};

const iconButtonStyles = (props: StylesProps) => {
  const {isDisabled, backgroundColor} = props;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 8,
      gap: 4,
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: backgroundColor || '',
      opacity: isDisabled ? 0.5 : 1,
    },
    text: {
      color: 'white',
      fontSize: 12,
    },
  });
};

type CustomButtonTypes = 'large' | 'icon';

type CustomButtonProps = {
  type: CustomButtonTypes;
  title?: string;
  disabled?: boolean;
  color?: string;
  icon?: JSX.Element;
  handlePress: () => void;
};

const CustomButton = (props: CustomButtonProps) => {
  const {type, title, disabled, color, icon, handlePress} = props;

  const getClasses = ({isDisabled, backgroundColor}: StylesProps) => {
    switch (type) {
      case 'large':
        return largeButtonStyles({isDisabled, backgroundColor});
      case 'icon':
        return iconButtonStyles({isDisabled, backgroundColor});
    }
  };

  const classes = getClasses({isDisabled: disabled, backgroundColor: color});

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled}>
      {type === 'large' && (
        <View style={classes.container}>
          {title && <Text style={classes.text}>{title}</Text>}
          {icon && icon}
        </View>
      )}
      {type === 'icon' && (
        <View style={classes.container}>
          {title && <Text style={classes.text}>{title}</Text>}
          {icon && icon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
