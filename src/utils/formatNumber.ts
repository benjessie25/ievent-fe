import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

const locale = 'en-US';

export function fCurrency(number:any) {
  const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: process.env.BASE_CURRENCY
  });

  return currency.format(number).slice(0, -1);
}

export function fPercent(number:any) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number:any) {
  return numeral(number).format();
}

export function fShortenNumber(number:any) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number:any) {
  return numeral(number).format('0.0 b');
}
