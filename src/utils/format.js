import Numeral from 'numeral';
import 'numeral/locales/pt-br';

export const formatPrice = v => {
  Numeral.locale('pt-br');
  return Numeral(v).format('$ 0,0.00');
};
