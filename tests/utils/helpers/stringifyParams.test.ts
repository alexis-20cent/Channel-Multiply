import { stringifyParams } from "@/utils/helpers/stringifyParams";

describe('stringifyParams', () => {
  test('returns an array of array containing key/value giving an object', () => {
	  const results = stringifyParams({ a: 1, b: 'a', c: [true] });
    expect(results).toHaveLength(3);
    expect(results[0]).toHaveLength(2);
    expect(results[1]).toHaveLength(2);
    expect(results[2]).toHaveLength(2);
    expect(typeof results[0][0]).toBe('string');
    expect(typeof results[0][1]).toBe('string');
    expect(typeof results[1][0]).toBe('string');
    expect(typeof results[1][1]).toBe('string');
    expect(typeof results[2][0]).toBe('string');
    expect(typeof results[2][1]).toBe('string');
  });
});
