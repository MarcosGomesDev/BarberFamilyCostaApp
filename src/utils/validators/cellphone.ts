export function isValidBrazilianPhone(phone: string) {
  phone.replace(/\D/g, '');

  const regex = /^(\+?55)?\d{2}9\d{8}$/;

  if (!regex.test(phone)) {
    return false;
  }

  // remove +55 se tiver e verifica se todos os dígitos são iguais
  const digits = phone.replace(/\D/g, '');
  return !/^(\d)\1+$/.test(digits);
}
