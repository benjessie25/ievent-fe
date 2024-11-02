import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date:Date) {
  return format(new Date(date), 'dd MMMM yyyy');
}
export function fDateShortMonth(date:Date) {
  return format(new Date(date), 'MM/dd/yyyy'); // Change format here (e.g., 'dd MMM yyyy')
}
export function fDateShort(date:Date) {
  return format(new Date(date), 'dd MMM yyyy');
}
export function fDateTime(date:Date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date:Date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date:Date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date:Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}
