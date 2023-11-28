function cakes(recipe, available) {
    let mascount = []
    let masrecipe = Object.keys(recipe)
    if (!masrecipe.every((e) => available.hasOwnProperty(e)))
        return 0
    else {
        for (let key in recipe) {
            for (let keya in available) {
                if (key === keya) {
                    mascount.push(Math.floor(available[keya] / recipe[key]))
                }
            }
        }
        console.log(mascount.reduce((a, b) => Math.min(a, b)))
    }
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

cakes(recipe, available);