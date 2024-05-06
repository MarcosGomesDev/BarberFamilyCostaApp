import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import { useToast, useToastService } from '@services';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ToasContent } from './components';

const height = (Dimensions.get('screen').height * 3) / 100;

const DEFAULT_DURATION = 4000;

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  const [timer, setTimer] = useState<number | null>(null);

  const toastInitialPosition =
    toast?.position === 'bottom'
      ? new Animated.Value(Dimensions.get('screen').height * 1.1)
      : new Animated.Value(-(getStatusBarHeight() + height));

  const toastFinalPosition =
    toast?.position === 'bottom'
      ? Dimensions.get('screen').height * 1.1
      : -(getStatusBarHeight() + height);

  const toastStartPosition =
    toast?.position === 'bottom' ? Dimensions.get('screen').height * 0.9 : 0;

  const [pos] = useState(toastInitialPosition);

  const runExitingAnimation = useCallback(() => {
    Animated.timing(pos, {
      toValue: toastFinalPosition,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      hideToast();
      setTimer(null);
    });
  }, [pos, hideToast, toastFinalPosition]);

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(pos, {
      toValue: toastStartPosition,
      duration: 140,
      useNativeDriver: true,
    }).start(() => {
      setTimer(toast?.duration || DEFAULT_DURATION);
    });
  }, [pos, toast?.duration, toastStartPosition]);

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
    }

    if (timer) {
      const timeout = setTimeout(() => {
        runExitingAnimation();
      }, timer);

      return () => clearTimeout(timeout);
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast, timer]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID={'toast-message'}
      style={{
        position: 'absolute',
        alignSelf: 'center',
        transform: [{ translateY: pos }],
      }}>
      <ToasContent toast={toast} onPress={() => runExitingAnimation()} />
    </Animated.View>
  );
}
