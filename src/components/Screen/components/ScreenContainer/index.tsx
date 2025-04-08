import React from 'react';
import {
  Keyboard,
  ScrollView,
  ScrollViewProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface Props extends Omit<ScrollViewProps, 'children'> {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  children,
  backgroundColor,
  ...props
}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor, flex: 1 }}
      {...props}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return (
    <View style={{ backgroundColor, flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
}
