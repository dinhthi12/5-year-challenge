import { addBinary } from '../addbinary';

describe("Add Binary", () => {
  test("Case 1: simple add", () => {
    expect(addBinary("1", "1")).toEqual("10");
  });

  test("Case 2: different lengths", () => {
    expect(addBinary("11", "1")).toEqual("100");
  });

  test("Case 3: longer numbers", () => {
    expect(addBinary("1010", "1011")).toEqual("10101");
  });

  test("Case 4: one side empty", () => {
    expect(addBinary("101", "")).toEqual("101");
    expect(addBinary("", "111")).toEqual("111");
  });
});
