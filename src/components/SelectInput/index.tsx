import { useAppTheme, useDebounce } from '@hooks';
import { ThemeColors } from '@theme';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  TextInput as Input,
  Pressable,
  TextInputProps,
} from 'react-native';
import Modal from 'react-native-modal';
import { Box, BoxProps } from '../Box';
import { Button } from '../Button';
import { Icon, IconName } from '../Icon';
import { Text } from '../Text';
import TextInput from '../TextInput';

interface OptionsProp {
  label: string;
  value: any;
}
interface BaseSelectInputProps
  extends Omit<TextInputProps, keyof BoxProps>,
    BoxProps {
  errorMessage?: string;
  editable?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  onChangeValue: (value: any) => void;
  options: OptionsProp[];
  hasSearch?: boolean;
  defaultValue?: string;
  valueSelected?: OptionsProp;
}

export interface IconSelectInputProps extends BaseSelectInputProps {
  hasIcon?: true;
  iconName: IconName;
  iconSize?: number;
  textColor?: ThemeColors;
}

export interface TextSelectInputProps extends BaseSelectInputProps {
  hasIcon?: false;
  iconName?: IconName;
  iconSize?: number;
  textColor?: ThemeColors;
}

export type SelectInputProps = IconSelectInputProps | TextSelectInputProps;

export function SelectInput({
  errorMessage,
  editable = true,
  label = 'Selecione',
  hasIcon,
  iconName,
  onChangeValue,
  options = [],
  iconSize = 20,
  hasSearch = false,
  size = 'medium',
  valueSelected,
  ...boxProps
}: SelectInputProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState<OptionsProp | null>(valueSelected || null);
  const [search, setSearch] = useState('');
  const moveText = useRef(new Animated.Value(state ? 1 : 0)).current;
  const inputRef = useRef(null);

  const { colors } = useAppTheme();

  function handleOpenModal() {
    setModalVisible(true);
    moveTextTop();
  }

  const modalHeights = {
    small: Dimensions.get('window').height * 0.35,
    medium: Dimensions.get('window').height * 0.65,
    large: Dimensions.get('window').height * 0.8,
  };

  const moveTextTop = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [moveText]);

  const moveTextBottom = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [moveText]);

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const xVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
      ...(hasIcon ? [{ translateX: xVal }] : []),
    ],
  };

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);

    if (!state) {
      moveTextBottom();
      return;
    }
  }, [state, moveTextBottom]);

  const handleSelectOption = useCallback(
    (selectedOption: OptionsProp | null) => {
      if (selectedOption) {
        setState(selectedOption);
        onChangeValue(selectedOption.value);
        setModalVisible(false);
      } else if (selectedOption === state?.value) {
        setState(null);
        onChangeValue(null);
      }
    },
    [onChangeValue, state?.value],
  );

  const searching = useDebounce(search, 500);

  const filterOptions = useMemo(() => {
    if (!searching) {
      return options;
    }
    return options.filter(option =>
      option.label.toLowerCase().includes(searching.toLowerCase()),
    );
  }, [searching, options]);

  useEffect(() => {
    if (state) {
      moveTextTop();
    }
  }, [state, moveTextTop]);

  return (
    <>
      <Box mb="s24" {...boxProps}>
        {errorMessage && (
          <Text
            color="red"
            preset="paragraphSmall"
            bold
            textAlign="right"
            style={{
              alignSelf: 'flex-end',
            }}
            mb="s4">
            {errorMessage}
          </Text>
        )}
        <Pressable disabled={!editable} onPress={handleOpenModal}>
          <Box
            borderWidth={1.4}
            paddingVertical="s4"
            paddingHorizontal="s12"
            borderColor={
              errorMessage ? 'red' : state ? 'greenSuccess' : 'gray2'
            }
            flexGrow={1}
            flexShrink={1}
            flexDirection="row"
            justifyContent="space-between"
            borderRadius="s8"
            width="100%">
            {label && (
              <Animated.View
                style={[
                  {
                    position: 'absolute',
                    top: 10,
                    left: hasIcon ? 34 : 10,
                    zIndex: 3,
                    borderRadius: 90,
                  },
                  animStyle,
                ]}>
                <Box
                  flexDirection="row"
                  backgroundColor="background"
                  justifyContent="space-between"
                  paddingHorizontal="s8">
                  <Text
                    preset="paragraphSmall"
                    marginBottom="s4"
                    color={
                      errorMessage
                        ? 'red'
                        : state && editable
                        ? 'greenSuccess'
                        : 'gray2'
                    }>
                    {label}
                  </Text>
                </Box>
              </Animated.View>
            )}

            <Box
              flexDirection="row"
              alignItems="center"
              width="100%"
              justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                {hasIcon && (
                  <Icon
                    name={iconName}
                    size={iconSize}
                    color={
                      errorMessage
                        ? 'red'
                        : state && editable
                        ? 'greenSuccess'
                        : 'gray2'
                    }
                  />
                )}
                <Input
                  ref={inputRef}
                  editable={false}
                  style={{
                    paddingLeft: 10,
                    fontSize: 14,
                    color: errorMessage
                      ? colors.red
                      : state
                      ? colors.greenSuccess
                      : colors.gray2,
                  }}
                  placeholderTextColor={
                    errorMessage ? colors.red : colors.gray2
                  }
                  value={state?.label}
                  onPressIn={handleOpenModal}
                />
              </Box>
              <Icon
                name="checkDown"
                size={20}
                color={errorMessage ? 'red' : state ? 'greenSuccess' : 'gray2'}
              />
            </Box>
          </Box>
        </Pressable>
      </Box>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={handleCloseModal}
        animationIn="slideInUp"
        useNativeDriver
        statusBarTranslucent
        backdropOpacity={0.3}
        useNativeDriverForBackdrop
        animationOut="slideOutDown"
        avoidKeyboard
        style={{
          minHeight: Dimensions.get('screen').height,
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <Box
          width="100%"
          flex={1}
          borderTopLeftRadius="s20"
          borderTopRightRadius="s20"
          maxHeight={modalHeights[size]}
          position="relative"
          backgroundColor="background"
          mb="s24">
          <Box
            margin="s14"
            mt="s16"
            alignItems="center"
            flexDirection="row"
            alignSelf="center">
            <Text textAlign="center" preset="headingSmall">
              Selecione uma opção
            </Text>
          </Box>

          {hasSearch && (
            <Box marginHorizontal="s24" mt="s10">
              <TextInput
                label="Filtrar opções"
                LeftComponent={<Icon name="search" size={20} color="gray2" />}
                onChangeText={(text: string) => setSearch(text)}
              />
            </Box>
          )}
          <Box
            padding="s24"
            flex={1}
            height="auto"
            backgroundColor="background">
            <FlatList
              data={filterOptions}
              keyExtractor={item => item.value.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
              }}
              ListEmptyComponent={
                <Box
                  minHeight={'100%'}
                  alignItems="center"
                  backgroundColor="background"
                  style={{
                    paddingTop: '45%',
                  }}>
                  <Text textAlign="center">Nenhuma opção encontrada</Text>
                </Box>
              }
              ItemSeparatorComponent={() => <Box height={16} />}
              renderItem={({ item }) => (
                <Button
                  title={item.label}
                  onPress={() => handleSelectOption(item)}
                />
              )}
            />
          </Box>

          <Box
            padding="s4"
            borderTopWidth={1}
            borderTopColor="gray2"
            backgroundColor="background">
            <Button
              title="Fechar"
              preset="outline"
              onPress={handleCloseModal}
              width={'24%'}
              alignSelf="center"
              height={35}
              mt="s10"
              mb="s4"
              textPreset="paragraphSmall"
              borderRadius="full"
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
