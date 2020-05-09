function multiply(a, b) {
  return a*b
}

test('multiply', () => {
  expect(multiply(2, 2)).toBe(4);
  expect(multiply(-1, 3)).toBe(-3);
  expect(multiply(10, 0.1)).toBe(1);
});
