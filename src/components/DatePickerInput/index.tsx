import dayjs from 'dayjs';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Box, BoxProps } from '../Box';
import TextInput, { TextInputProps } from '../TextInput';

export interface DatePickerInputProps extends Omit<TextInputProps, 'onChange'> {
  label: string;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  testID?: string;
  errorMessage?: string;
  format?: string;
  boxProps?: BoxProps;
}

export function DatePickerInput({
  label,
  onChange,
  minDate,
  maxDate,
  errorMessage,
  format = 'DD/MM/YYYY',
  placeholder = 'Selecione uma data',
  testID,
  boxProps,
  ...props
}: DatePickerInputProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Box {...boxProps}>
        <TextInput
          label={label}
          onPress={() => {
            setShow(true);
          }}
          editable={false}
          value={props.value ? dayjs(props.value).format(format) : ''}
          placeholder={placeholder}
          errorMessage={errorMessage}
          testID={testID}
        />

        {show && (
          <DateTimePickerModal
            isVisible={true}
            mode="date"
            date={
              props.value
                ? new Date(props.value)
                : maxDate
                ? maxDate
                : new Date()
            }
            minimumDate={minDate}
            maximumDate={maxDate}
            locale="pt_BR"
            timeZoneName="America/Sao_Paulo"
            onConfirm={selectedDate => {
              onChange(selectedDate);
              setShow(false);
            }}
            onCancel={() => setShow(false)}
          />
        )}
      </Box>
    </>
  );
}
