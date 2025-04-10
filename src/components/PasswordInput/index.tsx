import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Icon, RefProps, TextInput, TextInputProps } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

const PasswordInput: ForwardRefRenderFunction<RefProps, PasswordInputProps> = (
  props,
  ref,
) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<RefProps>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus() {
        inputRef.current?.focus();
      },
      blur() {
        inputRef.current?.blur();
      },
    }),
    [],
  );

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      ref={inputRef}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color={
            props.errorMessage ? 'red' : isFocused ? 'primaryContrast' : 'gray6'
          }
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
};

export default forwardRef(PasswordInput);
