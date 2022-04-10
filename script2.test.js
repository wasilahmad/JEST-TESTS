// fileName.test.js or __test__.fileName.js valid file name
const googleSearch = require('./script2');

const dbMock = [
    "dogs.com",
    "foody.com",
    "animals.com",
    "disney.com",
    "wildcats.com",
    "dogpictures.com"
];

// it() => used for test case
// describe() => used for group test cases togather

describe('Google Search', () => {
    it('is running', () => {
        expect(googleSearch('dog', dbMock)).toExist;
    });
    
    it('is is working', () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
    });
    
    it('works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    });
      
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    });
});