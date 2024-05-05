export function maskPhone(value: string) {
  const cleanedValue = value.replace(/\D/g, '');
  if (cleanedValue.length > 10) {
    return cleanedValue
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  } else {
    return cleanedValue
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  }
}
