import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function SmartphoneIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        stroke={color}
      />
      <Path
        d="M12 18H12.01"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        stroke={color}
      />
    </Svg>
  );
}
