import React, { type ReactElement } from 'react';
import { Box, BoxProps } from '../Box';

interface Props extends BoxProps {
  total: number;
  current: number;
}

export function StepCounter({ total, current, ...props }: Props): ReactElement {
  return (
    <Box flexDirection="row" {...props}>
      {Array.from({ length: total }).map((v, index) => (
        <Box
          key={index}
          width={10}
          height={10}
          backgroundColor={current === index + 1 ? 'primary' : 'gray8'}
          borderRadius="full"
          mr="s4"
        />
      ))}
    </Box>
  );
}
