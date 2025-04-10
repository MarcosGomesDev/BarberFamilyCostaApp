import { Box, Icon, Screen, StepCounter } from '@components';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { LoginInformation } from './components';
import { AccountInformation, PhoneConfirmation } from './components/Forms';
const { width } = Dimensions.get('screen');

export function SignUpScreen() {
  const [step, setStep] = useState(1);

  const translateX = useRef(new Animated.Value(0)).current;

  const handleNextStep = (newStep: number) => {
    setStep(newStep);
  };

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -width * (step - 1 - 1),
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [step, translateX]);

  const HeaderComponent = (
    <Box mt="s4" flexDirection="row" alignItems="center" mr="s10">
      <Icon name="logo" size={24} />
    </Box>
  );

  return (
    <Screen
      justifyContent="flex-end"
      hasHeader
      canGoBack
      HeaderComponent={HeaderComponent}>
      <Box flex={1} mt="s48" gap="s10">
        <Box alignSelf="flex-start">
          <StepCounter current={step} total={3} />
        </Box>
        <Box alignItems="center" flex={1} justifyContent="center">
          <Animated.View
            style={{
              flexDirection: 'row',
              flex: 1,
              transform: [{ translateX }],
              width: width * 3,
            }}>
            <Box
              width={width}
              justifyContent="center"
              alignItems="center"
              flex={1}>
              <Box width={width * 0.89} flex={1}>
                <LoginInformation onNext={() => handleNextStep(2)} />
              </Box>
            </Box>

            {/* STEP 2 */}
            <Box
              width={width}
              justifyContent="center"
              alignItems="center"
              flex={1}>
              <Box width={width * 0.89} flex={1}>
                <AccountInformation onNext={() => handleNextStep(3)} />
              </Box>
            </Box>

            {/* STEP 3 */}
            <Box
              width={width}
              justifyContent="center"
              alignItems="center"
              flex={1}>
              <Box width={width * 0.89} flex={1}>
                <PhoneConfirmation />
              </Box>
            </Box>
          </Animated.View>
        </Box>
      </Box>
    </Screen>
  );
}
