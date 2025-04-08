import { Controller, useFormContext } from 'react-hook-form';
import {
  IconSelectInputProps,
  SelectInput,
  TextSelectInputProps,
} from '../SelectInput';

interface BaseFormSelectInputProps {
  name: string;
}

interface FormIconSelectInputProps
  extends Omit<IconSelectInputProps, 'onChangeValue'>,
    BaseFormSelectInputProps {}

interface FormTextSelectInputProps
  extends Omit<TextSelectInputProps, 'onChangeValue'>,
    BaseFormSelectInputProps {}

type FormSelectInputProps = FormIconSelectInputProps | FormTextSelectInputProps;

export function FormSelectInput({ name, ...props }: FormSelectInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange: onChangeForm, value },
        fieldState: { error },
      }) => (
        <SelectInput
          value={value}
          onChangeValue={onChangeForm}
          errorMessage={error?.message}
          {...props}
        />
      )}
    />
  );
}
