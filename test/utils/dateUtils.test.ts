/**
 * jest + GAS + typescript
 * @see https://tech.actindi.net/2019/07/03/081258
 */

import { pad0, formatDate } from "../../src/utils/dateUtils";

describe("pad0", () => {
  it("n < 0", () => {
    expect(pad0(-1)).toBe(`-1`);
  });

  it("n < 10", () => {
    expect(pad0(1)).toBe(`01`);
    expect(pad0(9)).toBe(`09`);
  });

  it("10 <= n", () => {
    expect(pad0(10)).toBe(`10`);
    expect(pad0(100)).toBe(`100`);
  });
});

describe("formatDate", () => {
  it("2023/1/1, YYYY年M月D日", () => {
    expect(formatDate(new Date(2023, 0, 1), "YYYY年M月D日")).toBe(
      `2023年1月1日`
    );
  });

  it("2023/10/11, YYYY/M/D", () => {
    expect(formatDate(new Date(2023, 9, 11), "YYYY/M/D")).toBe(`2023/10/11`);
  });

  it("2023/1/1, YYYY/MM/DD", () => {
    expect(formatDate(new Date(2023, 0, 1), "YYYY/MM/DD")).toBe(`2023/01/01`);
  });

  it("2023/10/11, YYYY/MM/DD", () => {
    expect(formatDate(new Date(2023, 9, 11), "YYYY/MM/DD")).toBe(`2023/10/11`);
  });

  it("2023/10/11 3:5, H:m", () => {
    expect(formatDate(new Date(2023, 9, 11, 3, 5), "H:m")).toBe(`3:5`);
  });

  it("2023/10/11 3:5, HH:mm", () => {
    expect(formatDate(new Date(2023, 9, 11, 3, 5), "HH:mm")).toBe(`03:05`);
  });

  it("2023/10/11 14:35:10, HH:mm:SS", () => {
    expect(formatDate(new Date(2023, 9, 11, 14, 35, 10), "HH:mm:SS")).toBe(
      `14:35:10`
    );
  });

  it("2023/10/11, YYYY-MM-MM", () => {
    expect(formatDate(new Date(2023, 9, 11), "YYYY-MM-MM")).toBe(`2023-10-10`);
  });
});
