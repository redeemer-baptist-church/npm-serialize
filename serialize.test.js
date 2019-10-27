const {serialize} = require('./serialize')

describe('serialize function', () => {
  it('serializes an array of async functions', async () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const output = await serialize(input.map(async i => i))
    await expect(output).toEqual(input)
  })
})
