// fileName.spec.js valid file name

const addition = require('./script1');

it("This is silly Test", () => {
    expect("Hello").toBe("Hello");
})

it("adds 1 + 2 to equal 3", () => {
    //console.log("inside script1.spec.js", addition);
    expect(addition(1,2)).toBe(3);
});