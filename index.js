function findMatching(drivers, string) {
    return drivers.filter(function (name) {
       return string.toUpperCase() === name.toUpperCase();
    });
    
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (name) {
        return name.startsWith(string)
    })

}

function matchName(drivers, string) {
    return drivers.filter(function (property) {
        return property.name === string
    })
}