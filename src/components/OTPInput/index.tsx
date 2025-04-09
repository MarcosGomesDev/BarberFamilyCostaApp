import { useAppTheme } from '@hooks';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import { Box, BoxProps } from '../Box';
import { Text } from '../Text';

export interface OTPInputProps extends BoxProps {
  onComplete: (code: string) => void;
  errorMessage?: string;
  value?: string;
}

export interface OTPRefProps {
  focus: () => void;
  blur: () => void;
}

const OTPInput: ForwardRefRenderFunction<OTPRefProps, OTPInputProps> = (
  { onComplete, value = '', errorMessage, ...props },
  ref,
) => {
  const { colors } = useAppTheme();
  const [otp, setOtp] = useState<string[]>(
    value ? value.split('') : ['', '', '', '', '', ''],
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (errorMessage && value.length === 6) {
      inputRefs.current[5]?.focus();
    } else if (!value) {
      inputRefs.current[0]?.focus();
    }

    if (value !== otp.join('')) {
      setOtp(value ? value.split('') : ['', '', '', '', '', '']);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage, value]);

  useImperativeHandle(
    ref,
    () => ({
      focus() {
        const firstEmptyIndex = otp.findIndex(digit => !digit);
        const indexToFocus = firstEmptyIndex === -1 ? 0 : firstEmptyIndex;
        inputRefs.current[indexToFocus]?.focus();
      },
      blur() {
        const currentFocusedInput = inputRefs.current.find(inputRef =>
          inputRef?.isFocused(),
        );
        currentFocusedInput?.blur();
      },
    }),
    [otp],
  );

  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    const otpValue = newOtp.join('');
    if (newOtp.every(digit => digit.length === 1)) {
      Keyboard.dismiss();
      onComplete(otpValue);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      onComplete(newOtp.join(''));
    }
  };

  function getBorderColor(index: number) {
    if (errorMessage) {
      return colors.red;
    }

    if (focusedIndex === index) {
      return colors.white;
    }

    if (value.length === 6) {
      return colors.green;
    }

    return otp[index] ? colors.white : colors.green;
  }

  return (
    <>
      {errorMessage && (
        <Text
          color="red"
          preset="paragraphCaption"
          bold
          style={{
            alignSelf: 'flex-start',
          }}>
          {errorMessage}
        </Text>
      )}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        my="s20"
        {...props}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => (inputRefs.current[index] = el)}
            style={{
              width: 45,
              height: 50,
              borderWidth: 1.4,
              borderColor: getBorderColor(index),
              borderRadius: 8,
              textAlign: 'center',
              fontSize: 20,
              color: colors.white,
              backgroundColor: colors.background,
              marginHorizontal: 5,
            }}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(-1)}
            keyboardType="numeric"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </Box>
    </>
  );
};

export default forwardRef(OTPInput);
