const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should return argument length  match', ()=>  {
        let results = shuffleArray(testArr)
        expect(testArr.length).toEqual(results.length )
    } )
})