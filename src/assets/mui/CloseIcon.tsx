import React from 'react';
import {Svg, Path} from 'react-native-svg';

const CloseIcon = ({height = 24, width = 24, fill = 'white'}) => {
  return (
    <Svg height={height} viewBox="0 0 24 24" width={width} fill={fill}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Svg>
  );
};

export default CloseIcon;
