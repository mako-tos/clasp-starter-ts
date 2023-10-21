function padding(n: number, digit: number, char: string) {
  if (n < 0 || digit < 1 || char === '') return `${n}`;
  let str = `${n}`;
  while (str.length < digit) str = `${char}${str}`;
  return str;
}

export function pad0(n: number) {
  return padding(n, 2, '0');
}

export function formatDate(date: Date, format: string) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const map = new Map<string, string>();
  map.set('YYYY', `${year}`);
  map.set('MM', pad0(month))
  map.set('M', `${month}`);
  map.set('DD', pad0(day))
  map.set('D', `${day}`)
  map.set('HH', pad0(hours));
  map.set('H', `${hours}`)
  map.set('mm', pad0(minutes))
  map.set('m', `${minutes}`)
  let str = format;
  map.forEach((value, key) => {
    str = str.replace(key, value);
  })
  return str;
}