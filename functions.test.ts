const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray returns an array of the same length as the argument sent in', () => {
        expect(shuffleArray([1, 2, 3])).toBeInstanceOf(Array)
    })

    test('check shuffleArray that items have been shuffled', () => {
        expect(shuffleArray([1, 2, 3]).length).toBe(3)
    })
})