import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import OTPInput, { OTPInputProps, OTPRefProps } from '../OTPInput';
interface FormOTPInputProps
  extends Omit<OTPInputProps, 'value' | 'onComplete'> {
  name: string;
}

const FormOTPInput: ForwardRefRenderFunction<OTPRefProps, FormOTPInputProps> = (
  { name, ...props },
  ref,
) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ref: fieldRef },
        fieldState: { error },
      }) => (
        <OTPInput
          // @ts-ignore
          ref={(instance: OTPRefProps | null) => {
            fieldRef(instance);
            if (ref) {
              if (typeof ref === 'function') {
                ref(instance);
              } else if (ref.current !== undefined) {
                ref.current = instance;
              }
            }
          }}
          onComplete={onChange}
          value={value}
          errorMessage={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default forwardRef(FormOTPInput);
