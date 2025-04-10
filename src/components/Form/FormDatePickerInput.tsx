import { Controller, useFormContext } from 'react-hook-form';
import { DatePickerInput, DatePickerInputProps } from '../DatePickerInput';

interface FormDatePickerInput extends Omit<DatePickerInputProps, 'onChange'> {
  name: string;
}

export function FormDatePickerInput({ name, ...props }: FormDatePickerInput) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange: onChangeForm, value },
        fieldState: { error },
      }) => (
        <DatePickerInput
          value={value}
          onChange={date => {
            onChangeForm(date.toISOString());
          }}
          errorMessage={error?.message}
          testID="input-date"
          {...props}
        />
      )}
    />
  );
}
