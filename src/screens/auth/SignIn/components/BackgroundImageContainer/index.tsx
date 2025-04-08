import React from 'react';
import {
  Image,
  ImageProps,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends ImageProps {
  children: React.ReactNode;
}

export function BackgroundImageContainer({ children, ...props }: Props) {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image {...props} style={[styles.image, { height: '65%' }]} />
      <View style={[styles.children, StyleSheet.absoluteFill, props.style]}>
        <LinearGradient
          colors={['rgba(108, 197, 81, 0.25)', 'rgba(31, 0, 11, 1)']}
          style={styles.gradient}
          locations={[0, 0.8]}
        />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  children: {
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});
