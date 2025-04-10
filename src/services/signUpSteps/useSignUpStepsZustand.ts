import { create } from 'zustand';
import { SignUpStore } from './signUpTypes';

const useSignUpStore = create<SignUpStore>(set => ({
  data: {},
  updateData: data => set(state => ({ data: { ...state.data, ...data } })),
  reset: () => set({ data: {} }),
}));

export function useSignUpStepsZustand(): SignUpStore['data'] {
  return useSignUpStore(state => state.data);
}

export function useSignUpStepsServiceZustand(): Pick<
  SignUpStore,
  'updateData' | 'reset'
> {
  const updateData = useSignUpStore(state => state.updateData);
  const reset = useSignUpStore(state => state.reset);
  return {
    updateData,
    reset,
  };
}
