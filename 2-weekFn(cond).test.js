const weekFn = require('./2-weekFn(cond)')

test('weekFn(0) should return "Sunday"', () => {
  expect(weekFn(1)).toBe('Понеділок')
  expect(weekFn(3)).toBe('Середа')
  expect(weekFn(7)).toBe('Неділя')
  expect(weekFn(9)).toBe(null)
  expect(weekFn(1.5)).toBe(null)
  expect(weekFn('2')).toBe(null)
})
