console.table(countries);
//функция, которая принимает массив стран и возвращает массив из перечисленных в д/з полей: "name", "capital", "region"//
let newCountries = countries.map(function (country){
    return{Name: country.name, Capital: country.capital, Region: country.region};
})
console.table(newCountries);
//функция, которая принимает на вход массив стран и возвращает массив отсортированный по убыванию чисел "population"//
let newCountries2 = countries.sort(function(a, b) {
    return b.population-a.population;
})
console.table(newCountries2);
//функция, которая принимает на вход массив стран и возвращает массив отсортированный по возрастанию
// строк 'alpha3Code'//
let newCountries3 = countries.sort(function(a, b){
    let nameA=a.alpha3Code, nameB=b.alpha3Code
    if (nameA < nameB)
        return -1
    if (nameA > nameB)
        return 1
    return 0
})
console.table(newCountries3);
//Функция которая принимает на вход массив стран и название поля (где каждый из элементов - числа "population")
// и возвращает среднее значение по этим числам//
let newCountries4 = (countries.reduce(function (acc, el) {
    return acc+el.population;
}, 0))/countries.length;
console.log(newCountries4.toFixed(2));




