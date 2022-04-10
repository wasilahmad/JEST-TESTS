// assume database stored array of values
const googleDatabase = [
    "cat.com",
    "foody.com",
    "animals.com",
    "disney.com",
    "wildcats.com",
    "catpictures.com",
    "myfaverouritcat.com"
]

const googleSearch = (searchInput, db) => {
    const matches = db.filter( website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log("googleSearch:", googleSearch('cat', googleDatabase));

module.exports = googleSearch;