import { ThemeColors } from '@theme';
import { TouchableOpacityBoxProps } from '../Box';

import { ButtonPreset } from './index';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primaryPurple',
      },
      content: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'primaryPurple',
        activeOpacity: 0.4,
      },
      content: 'white',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'gray1',
      },
      content: 'white',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray1',
      },
      content: 'white',
    },
  },
  default: {
    default: {
      container: {
        backgroundColor: 'gray1',
      },
      content: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'gray1',
        activeOpacity: 0,
      },
      content: 'white',
    },
  },

  danger: {
    default: {
      container: {
        backgroundColor: 'red',
      },
      content: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'red',
      },
      content: 'white',
    },
  },
};
