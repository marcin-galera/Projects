// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy

/*var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];

for (var i = 0; i < drinksNames.length; i++) {
    console.log(drinksNames[i])
}
*/

// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=

/*var totalPrice = 0;
var prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];

for (i = 0; i < prices.length; i++) {
    totalPrice += prices[i]
}
console.log(totalPrice)*/

// TODO.3: Zwróć sumę cen drinków z tablicy drinks
var price = 0
var totalPrice = 0;
var drinks = [
  {name: '  Vodka', price: 19.99},
  {name: 'Whisky  ', price: 40.00},
  {name: 'Prosseco  ', price: 35.99},
  {name: '  Beer', price: 3.20},
  {name: '   Vine  ', price: 16.50},
  {name: '  Gin  ', price: 23.30}
];
/*
for (i = 0; i < drinks.length; i++) {
    totalPrice += drinks[i].price
}
console.log(totalPrice);*/


// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

/*for (i = 0; i < drinks.length; i++) {

console.log(+drinks[i].price.toFixed(0));
}*/

// TODO.5. Za pomocą pętli, doklej jednostkę PLN do cen, zastosuj dekremenację!

/*for (i = drinks.length -1; i >= 0; i--) {
    console.log(drinks[i].price += " PLN");
}*/

// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces

/*for (i = 0; i < drinks.length; i++) {
    drinks[i].name = drinks[i].name.replace(/ /g,'')
    console.log(drinks[i])
}
*/


// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *

for (i = 0; i < drinks.length; i) {
    drinks[i].id = ++i;
    
}
console.log(drinks)
// i++ / i = i +1
// i+1 / i + 1
/* TODO.8: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka
 */