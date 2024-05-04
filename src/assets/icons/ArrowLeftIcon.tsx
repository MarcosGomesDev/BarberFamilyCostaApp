import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function ArrowLeftIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.5 15L7.5 10L12.5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        stroke={color}
      />
    </Svg>
  );
}
