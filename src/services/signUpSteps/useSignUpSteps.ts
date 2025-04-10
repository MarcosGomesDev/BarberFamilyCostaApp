import { SignUpStore } from './signUpTypes';
import {
  useSignUpStepsServiceZustand,
  useSignUpStepsZustand,
} from './useSignUpStepsZustand';

export function useSignUpSteps(): SignUpStore['data'] {
  return useSignUpStepsZustand();
}

export function useSignUpStepsActions(): Pick<
  SignUpStore,
  'updateData' | 'reset'
> {
  return useSignUpStepsServiceZustand();
}
