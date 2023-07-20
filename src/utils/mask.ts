export function maskReset(value: string) {
  // eslint-disable-next-line no-param-reassign
  value = value.toString().replace(/( )+/g, '');
  // eslint-disable-next-line no-useless-escape
  return value.replace(/(\.|\/|\-|\,|\(|\))/g, '');
}

export function maskMoney(value: any) {
  value.toString();
  if (!value) return '0,00';

  if (Number.isNaN(value)) {
    return '0,00';
  }

  return value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function maskCep(value: string) {
  return value.replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/, '$1.$2-$3');
}

export function maskCPF(value: string) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function maskPhone(value: string) {
  let phone = value.replace(/\D/g, '');
  phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2');
  phone = phone.replace(/(\d)(\d{4})$/, '$1-$2');
  return phone;
}

export function maskCreditCard(value: string) {
  return value.replace(/^([\d]{4})\.*([\d]{4})-*([\d]{4})-*([\d]{4})/, '$1 $2 $3 $4');
}

export function maskValidDate(value: string) {
  return value.replace(/^([\d]{2})\.*([\d]{2})/, '$1/$2');
}

export function maskCnpj(value: string) {
  value = value?.replace(/\D/g, '');
  value = value.substring(0, 14);
  value = value?.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
  return value;
}
