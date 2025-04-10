import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { RefProps, TextInput, TextInputProps } from '@components';

type FormTextInputProps = TextInputProps & {
  name: string;
  customMask?: (value: string) => string;
};

const FormTextInput: ForwardRefRenderFunction<RefProps, FormTextInputProps> = (
  { name, customMask, ...textInputProps },
  ref,
) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref: fieldRef },
        fieldState: { error },
        formState: { defaultValues },
      }) => (
        <TextInput
          ref={instance => {
            fieldRef(instance);
            if (ref) {
              if (typeof ref === 'function') {
                ref(instance);
              } else {
                ref.current = instance;
              }
            }
          }}
          value={value}
          onChangeText={text => {
            const finalValue = customMask ? customMask(text) : text;
            onChange(finalValue);
          }}
          defaultValue={defaultValues?.[name] ? defaultValues[name] : value}
          numberOfLines={1}
          onBlur={onBlur}
          errorMessage={error?.message}
          boxProps={{
            mb: 's24',
          }}
          {...textInputProps}
        />
      )}
    />
  );
};

export default forwardRef(FormTextInput);
