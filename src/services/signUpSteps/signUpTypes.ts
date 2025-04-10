type FormData = {
  name?: string;
  cpf?: string;
  birthdate?: string;
  cellphone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  token?: string;
  refreshToken?: string;
};

export type SignUpStore = {
  data: FormData | {};
  updateData: (data: Partial<FormData>) => void;
  reset: () => void;
};
