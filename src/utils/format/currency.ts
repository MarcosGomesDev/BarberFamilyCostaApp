export function formatBRLCurrency(value: string): string {
  // Remove todos os caracteres que não são dígitos
  const numericValue = value.replace(/\D/g, '');

  // Converte para centavos (número inteiro)
  const cents = parseInt(numericValue || '0', 10);

  // Formata o valor como moeda brasileira
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(cents / 100);
}
