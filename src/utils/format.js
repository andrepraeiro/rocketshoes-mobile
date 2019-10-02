import Numeral from 'numeral';

export const formatPrice = v => {
  Numeral.locale('pt-br');
  return Numeral(v).format('$ 0,0.00');
};
