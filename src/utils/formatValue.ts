const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'current', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
