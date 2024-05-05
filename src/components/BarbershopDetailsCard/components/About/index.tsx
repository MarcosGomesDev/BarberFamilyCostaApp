import { Box, Text } from '@components';
import React from 'react';

interface AboutProps {
  about: string;
}

export function About({ about }: AboutProps) {
  return (
    <Box pb="s12" mb="s14" borderBottomColor="gray1" borderBottomWidth={1}>
      <Box paddingHorizontal="s20" gap="s14" pb="s12">
        <Text color="gray3" bold>
          SOBRE NÓS
        </Text>
        <Text textAlign="justify" style={{ lineHeight: 26 }}>
          {about}
        </Text>
      </Box>
    </Box>
  );
}
