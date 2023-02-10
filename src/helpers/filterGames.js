// .filter() is een speciale functie dat een array kan kopieren en dingen kan zoeken dat door jou is aangegeven.
export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        // .indexOf() geeft de positie terug van het eerst voorkomen letter of woord in een string
        // als de index van nameToBeSearched niet -1 is return dan de game
        if (game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return game
        }
    })
}

export const filterGamesByPlatform = (platformToBeSearch, toBeSearchedArray) => {
    //  gaat door alle games filteren
    return toBeSearchedArray.filter(game => {
        let found = false
        game.platforms.forEach(platform => {
            // alles wordt omgezet naar uppercase zodat je de titels niet precies hoeft over te schrijven
            // als de value van de platform input hetzelde is als de platform in het data bestand. zet false naar true
            if (platform.toUpperCase() === platformToBeSearch.toUpperCase()) {
                found = true
            }
        })
        // geeft game terug als found true is
        if (found === true) {
            return game
        }
    })
}

// hetzelfde als wat met platform gebeurd alleen dan met de types
export const filterGamesByType = (typeToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false
        game.type.forEach(type => {
            if(type.toUpperCase() === typeToBeSearched.toUpperCase()) {
                found = true
            }
        })
        if(found === true){
            return game
        }
    })
}
