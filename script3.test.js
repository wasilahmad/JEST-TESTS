const fetch = require('node-fetch');
const jsonplaceholder = require('./script3');


// it("fetch data using getPeoplePromise method", () => {
//     // expect.assertions(number) verifies that a
//     // certain number of assertions are called during a
//     // test. This is often useful when testing asynchronous
//     // code, in order to make sure that assertions in a
//     // callback actually got called.
//     expect.assertions(1)
//     return jsonplaceholder.getPeoplePromise(fetch).then( data => {
//         console.log("fetch data using getPeoplePromise:", data);
//         expect(data.length).toEqual(10);
//     })    
// });

// it("fetch data using getPeopleAsync method", async () => {
//     expect.assertions(2)
//     const data = await jsonplaceholder.getPeopleAsync(fetch);
//     //console.log("fetch data using getPeopleAsync:", data);
//     expect(data.length).toEqual(10);
//     expect(data.length).toBeGreaterThan(5);
// });


it("Mock fetch function to get users data", () => {
    // Mock functions are also known as "spies", because
    // they let you spy on the behavior of a function that is
    // called indirectly by some other code, rather than just
    // testing the output. You can create a mock function with
    // jest.fn(). If no implementation is given, the mock
    // function will return undefined when invoked.
    // console.log("jest.fn():", jest.fn());
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve([{
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },{
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        }])
    }));

    expect.assertions(4);
    return jsonplaceholder.getPeoplePromise(mockFetch).then( data => {
        //console.log("mockFetch data:", data);
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://jsonplaceholder.typicode.com/users/');
        expect(data.length).toEqual(2); // provide mock data length
        expect(data.length).toBeGreaterThan(1);
    })
})

