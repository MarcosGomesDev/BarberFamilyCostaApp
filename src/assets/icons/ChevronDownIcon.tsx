import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function ChevronDownIcon({ size = 20, color = 'white' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        d="M6 9L12 15L18 9"
      />
    </Svg>
  );
}
