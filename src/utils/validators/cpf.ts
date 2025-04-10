export function isValidCPF(cpf: string): boolean {
  cpf.replace(/[^\d]/g, '');

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf[i], 10) * (10 - i);
  }
  let check1 = (sum * 10) % 11;
  if (check1 === 10 || check1 === 11) {
    check1 = 0;
  }
  if (check1 !== parseInt(cpf[9], 10)) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf[i], 10) * (11 - i);
  }
  let check2 = (sum * 10) % 11;
  if (check2 === 10 || check2 === 11) {
    check2 = 0;
  }
  return check2 === parseInt(cpf[10], 10);
}
