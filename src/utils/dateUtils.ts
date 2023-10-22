function padding(n: number, digit: number, char: string) {
  if (n < 0 || digit < 1 || char === "") return `${n}`;
  let str = `${n}`;
  while (str.length < digit) str = `${char}${str}`;
  return str;
}

export function pad0(n: number) {
  return padding(n, 2, "0");
}

/**
 * 日付をformatの形式に変換する
 * @param date
 * @param format
 * @returns
 */
export function formatDate(date: Date, format: string) {
  let str = format;
  const year = date.getFullYear();
  str = str.replace(/YYYY/g, `${year}`);

  const innerFunction = (str: string, replacer: string, value: number) => {
    const reg1 = new RegExp(`${replacer}${replacer}`, "g");
    str = str.replace(reg1, pad0(value));
    const reg2 = new RegExp(`${replacer}`, "g");
    return str.replace(reg2, `${value}`);
  };

  str = innerFunction(str, "M", date.getMonth() + 1);
  str = innerFunction(str, "D", date.getDate());
  str = innerFunction(str, "H", date.getHours());
  str = innerFunction(str, "m", date.getMinutes());
  return innerFunction(str, "S", date.getSeconds());
}
