import { IconBase } from '@components';
import React from 'react';

import { Svg, Path } from 'react-native-svg';

export function MenuIcon({ size = 20, color = 'gray0' }: IconBase) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M340 4034 c-173 -75 -161 -342 18 -394 26 -8 692 -10 2224 -8 l2186
        3 44 30 c138 97 118 306 -34 370 -33 13 -272 15 -2220 15 -1927 -1 -2187 -3
        -2218 -16z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M340 2754 c-173 -75 -161 -342 18 -394 26 -8 692 -10 2224 -8 l2186
        3 44 30 c138 97 118 306 -34 370 -33 13 -272 15 -2220 15 -1927 -1 -2187 -3
        -2218 -16z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M340 1474 c-173 -75 -161 -342 18 -394 26 -8 692 -10 2224 -8 l2186
        3 44 30 c138 97 118 306 -34 370 -33 13 -272 15 -2220 15 -1927 -1 -2187 -3
        -2218 -16z"
      />
    </Svg>
  );
}
