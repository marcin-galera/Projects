// const arr = [1, 2, 3, 4, 5];
// arr.push('6-new')
// arr.unshift('0-new')
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)

// var place = arr.indexOf(4);
// console.log(place);

// var newArr = arr.join(', ');
// console.log(newArr);


// function checkIndex() {
//     if (( arr.indexOf(6)) === -1) {
//         arr.push(6)
//     }
// }
// console.log(arr)

// const items = ['bulbasaur', 'muk', 'charizard', 'metapod', 'nipoqueen', 'vulpix', 'kadabra', 'dewgong'];
// console.log(items);

// var newPokemons = items.filter(function(pokemon) {
//     return pokemon.length > 5;
// })

// console.log(newPokemons)



//Dwa sposoby na uzywanie funkcji w funkcji filter
// const items = ['Bulbasaur', 'Muk', 'Charizard', 'Metapod', 'Nidoqueen', 'Vulpix', 'Kadabra', 'Dewgong'];

// console.log(items)

// const longPokemon = items.filter(function(pokemon) {    
//     return pokemon.length > 7;
// })
// console.log(longPokemon)
// // --------
// const isLognerThatFive = function(pokemon) {
//     return pokemon.length > 7
// }

// const longPokemon2 = items.filter(isLognerThatFive);

// console.log(longPokemon2)



// // --------------- Przyklad reduce
// const items = ['Bulbasaur', 'Muk', 'Charizard', 'Metapod', 'Nidoqueen', 'Vulpix', 'Kadabra', 'Dewgong'];

// console.log(items)

// const mySum = items.reduce(function(result, currentPokemon) {
//     return result - currentPokemon.length * 3;
// }, 100)

// console.log(mySum)