import group from './'

test('defined', () => {
  expect(group).toBeDefined()
  expect(typeof group).toBe('function')
})

test('removes duplicates and sorts numbers', () => {
  const result = group([1, 2, 4, 6, 8, 11, 7])
  expect(result).toMatchSnapshot()
})

test('ignores all non number values', () => {
  const result = group([1, 2, 4, 'notnumber', 8, 11, 7])
  expect(result).toMatchSnapshot()
})

test('return only groups with min length', () => {
  const result = group([1, 2, 4, 6, 9, 8, 11, 7], 3)
  expect(result).toMatchSnapshot()
})

test.skip('handles float numbers correctly', () => {
  // const result = group([1, 2, 4, 6.2, 6.1, 6.3, 8, 11, 7])
  // expect(result).toMatchSnapshot()
})
