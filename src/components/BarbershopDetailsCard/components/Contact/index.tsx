import { Box, Button, Icon, Text } from '@components';
// import { useToastService } from '@services';
import { copyToClipboard, maskPhone } from '@utils';
import React from 'react';

interface ContactProps {
  phones: string[];
}

export function Contact({ phones }: ContactProps) {
  // const { showToast } = useToastService();

  function handleCopyToClipboard(text: string) {
    copyToClipboard(text);
    // showToast({
    //   message: 'Número copiado para a área de transferência.',
    //   type: 'success',
    //   duration: 2000,
    // });
  }

  return (
    <Box
      pt="s12"
      pb="s12"
      mb="s14"
      borderBottomColor="gray1"
      borderBottomWidth={1}
      justifyContent="center">
      {phones.map(phone => {
        return (
          <Box
            key={phone}
            flexDirection="row"
            alignItems="center"
            paddingHorizontal="s20"
            pb="s12"
            justifyContent="space-between">
            <Box flexDirection="row" alignItems="center" gap="s14">
              <Icon name="smartphone" color="white" size={24} />
              <Text preset="paragraphLarge">{maskPhone(phone)}</Text>
            </Box>
            <Box>
              <Button
                title="Copiar"
                preset="default"
                height={40}
                onPress={() => handleCopyToClipboard(phone)}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
