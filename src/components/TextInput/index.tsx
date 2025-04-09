import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Keyboard,
  NativeSyntheticEvent,
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextInputFocusEventData,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';
import { Box, BoxProps } from '../Box';
import { $fontFamily, $fontSizes, Text } from '../Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
  borderColor?: ThemeColors;
}

export interface RefProps {
  focus: () => void;
  blur: () => void;
}

export const TextInput: ForwardRefRenderFunction<RefProps, TextInputProps> = (
  {
    label,
    errorMessage,
    RightComponent,
    LeftComponent,
    boxProps,
    borderColor,
    onFocus,
    onBlur,
    ...rnTextInputProps
  },
  ref,
) => {
  const { colors: themeColors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const moveText = useRef(
    new Animated.Value(rnTextInputProps.value ? 1 : 0),
  ).current;

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: borderColor
      ? borderColor
      : errorMessage
      ? 'red'
      : isFocused
      ? 'primaryContrast'
      : 'gray5',
    padding: 's12',
    borderRadius: 's8',
    backgroundColor: 'background',
  };

  const moveTextTop = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [moveText]);

  const moveTextBottom = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [moveText]);

  function focusInput() {
    inputRef.current?.focus();
    setIsFocused(true);
    moveTextTop();
  }

  const handleOnFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      moveTextTop();

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus, moveTextTop],
  );

  const handleOnBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (!rnTextInputProps.value && !rnTextInputProps.placeholder) {
        moveTextBottom();
      }
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    [
      onBlur,
      moveTextBottom,
      rnTextInputProps.value,
      rnTextInputProps.placeholder,
    ],
  );

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  useImperativeHandle(
    ref,
    () => ({
      focus() {
        return inputRef.current?.focus();
      },
      blur() {
        return inputRef.current?.blur();
      },
    }),
    [],
  );

  useEffect(() => {
    if (rnTextInputProps.value || rnTextInputProps.placeholder) {
      moveTextTop();
    }
  }, [moveTextTop, rnTextInputProps.value, rnTextInputProps.placeholder]);

  return (
    <>
      {errorMessage && (
        <Text
          color="red"
          preset="paragraphCaption"
          bold
          textAlign="right"
          style={{
            alignSelf: 'flex-end',
          }}
          mb="none">
          {errorMessage}
        </Text>
      )}
      <Box
        flexGrow={1}
        flexShrink={1}
        borderRadius="s8"
        width={'100%'}
        {...boxProps}>
        <Pressable onPress={focusInput}>
          {label && (
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  top: 9,
                  left: LeftComponent ? 34 : 10,
                  zIndex: 3,
                  borderRadius: 90,
                },
                animStyle,
              ]}>
              <Box
                flexDirection="row"
                backgroundColor="background"
                justifyContent="space-between"
                paddingHorizontal="s8">
                <Text
                  preset="paragraphSmall"
                  marginBottom="s4"
                  color={
                    borderColor
                      ? borderColor
                      : errorMessage
                      ? 'red'
                      : isFocused
                      ? 'primaryContrast'
                      : 'gray5'
                  }>
                  {label}
                </Text>
              </Box>
            </Animated.View>
          )}
          <Box {...$textInputContainer}>
            {LeftComponent && (
              <Box justifyContent="center">{LeftComponent}</Box>
            )}
            <RNTextInput
              ref={inputRef}
              onSubmitEditing={Keyboard.dismiss}
              autoCapitalize="none"
              cursorColor={themeColors.primaryContrast}
              placeholderTextColor={themeColors.gray3}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              style={[
                $textInputStyle,
                {
                  color: themeColors.primaryContrast,
                },
              ]}
              {...rnTextInputProps}
            />
            {RightComponent && (
              <Box justifyContent="center" ml="s16">
                {RightComponent}
              </Box>
            )}
          </Box>
        </Pressable>
      </Box>
    </>
  );
};

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  paddingLeft: 10,
  backgroundColor: 'transparent',
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

export default forwardRef(TextInput);
