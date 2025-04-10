const maskBRLCPF = (value: string) => {
  let cleaned = value.replace(/\D/g, '');

  cleaned = cleaned.slice(0, 11);

  let masked = cleaned;
  if (cleaned.length > 3) {
    masked = cleaned.slice(0, 3) + '.' + cleaned.slice(3);
  }
  if (cleaned.length > 6) {
    masked = masked.slice(0, 7) + '.' + masked.slice(7);
  }
  if (cleaned.length > 9) {
    masked = masked.slice(0, 11) + '-' + masked.slice(11);
  }

  return masked;
};

export { maskBRLCPF };
