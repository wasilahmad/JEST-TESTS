// native fetch() present in window.object that's the reason we require node version of fetch().
const fetch = require('node-fetch'); 

const getPeoplePromise = fetch => { // <= dependancy injection
    return fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => data);
}

const getPeopleAsync =  async (fetch) => { // <= dependancy injection
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    //console.log(data);
    return data;
}

//console.log("getPeoplePromise:", getPeoplePromise(fetch));
//console.log("getPeopleAsync:", getPeopleAsync(fetch));

module.exports = {
    getPeoplePromise,
    getPeopleAsync
}