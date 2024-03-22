import React from 'react';
import {Svg, Path, G, Polygon} from 'react-native-svg';

const ArrowForwardIcon = ({height = 24, width = 24, fill = 'white'}) => {
  return (
    <Svg
      enable-background="new 0 0 24 24"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill={fill}>
      <G>
        <Path d="M0,0h24v24H0V0z" fill="none" />
      </G>
      <G>
        <Polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </G>
    </Svg>
  );
};

export default ArrowForwardIcon;
