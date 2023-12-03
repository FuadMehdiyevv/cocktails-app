class CocktailService {
    constructor() {
        this.path = 'https://www.thecocktaildb.com/api/json/v1/1'
    }

    getUrl(url){
        return fetch(url)
            .then(res => res.json())
    }

    randomCocktail() {
        return this.getUrl(`${this.path}/random.php`)
            .then(json => this.transform(json.drinks[0]))
    }

    byFirstLetter(letter) {
        return this.getUrl(`${this.path}/search.php?f=${letter}`)
            .then(json => json.drinks.map(obj => this.transform(obj)))
    }

    transform(obj) {        
        return {
            id: obj.idDrink,
            cath: obj.strAlcoholic,
            sub: obj.strCategory,
            name: obj.strDrink,
            img: obj.strDrinkThumb,
            glass: obj.strGlass,
            ingr: Object.entries(obj).filter(arr => arr[0].includes("strIngredient") && arr[1] != null).map(a => a[1]), 
            desc: obj.strInstructions
        }
    }
}

export default CocktailService