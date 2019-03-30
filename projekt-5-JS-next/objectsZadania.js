

// const myFirstObject = {};
// console.log(myFirstObject)

// const bike = {

//     nazwa: 'Giant',
//     rozmiarRamy: 24,

//     sayMyName: function() {
//       console.log( this.nazwa);
//     },

//     go: function() {
//         this.km = this.km + 1;
//     },
//     stop: function() {
      
//     },
//     repair: function() {
      
//     },
//     sayMyName: function() {
      
//     },
//     showMySize: function() {
      
//     }

// };

// bike.kilometers = 0;
// console.log(bike)
// console.log(scroll.top)


////////////////////////////////////////////////////////////////

// const car = {

//     model: 'e46',
//     age: 20,

// }

// const person = {

//   name: 'marcin',
//   age: 25,

// }

//2. Stwórz funkcję, której przekazując obiekt wypisze nazwy pól
// const showProperties = function(myCar) {

//     console.log(Object.keys(myCar));
//     console.log(Object.values(myCar));
// }

// showProperties(car)

// const showProperties = function(object) {

//   Object.keys()
// }










// Zadania:

// 1.
// Przy uzyciu funkcji for napisz petle ktora zamieni tekst elementow z tablicy na pisane duzymi literami:
// const ex1 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];

// ex1.forEach( function(element, i) {
//    ex1[i] = element.toUpperCase();
// })
// console.log(ex1)

//2. Wykonaj to samo zadanie z funkcja map
// const ex2 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];

// const xe = ex2.map( function(imie) {
//   return imie.toUpperCase() ;
// })
// console.log(xe)


//3. Dostajesz z jakiegoś zródła danych taki napis:

// const names = "anna maciej michal Monika JOANNA"

// //Potrzebujesz zrobic z tego liste.
// const listNames = names.split(' ')
// console.log(listNames)
// //Nastepnie wyswietl tylko kobiece imiona
// const famaleNames = listNames.charAt(.length-1) === 'a'
// //Nastepnie spraw aby pierwsza litera byla zawsze duza, a reszta imienia byla malymi literami


//4.
//Dostajesz liste obiektow. Kazdy obiekt zawiera informacje odnosnie uzytkownika (jego imie, nazwisko, wiek)
//Wyswietl te dane w formie przyjaznej uzytkownikowi
const users = [
  {
    name: "Michal",
    lastname: "Kowalski",
    age: "23"
  },
  {
    name: "Jan",
    lastname: "Zielony",
    age: "12"
  },
  {
    name: "Kuba",
    lastname: "Czerwony",
    age: "82"
  },
  {
    name: "Joanna",
    lastname: "Niebieska",
    age: "31"
  },
  {
    name: "Anna",
    lastname: "Brazowa",
    age: "26"
  },
  {
    name: "Agnieszka",
    lastname: "Zolta",
    age: "18"
  },
];


//5. Do swojej aplikacji planujesz dodac nowa funkcjonalnosc. Osoby ponizej 18 roku zycia musza byc odpowiednio oznaczone.
// Dodaj do kazdego obiektu w tablicy pole isAdult, ktore bedzie mialo wartosc true jesli osoba jest pelnoletnia, i wartosc false jesli nie jest
// pelnoletnia


//6 Orzymales tablice tablic [[..], [...]], potrzebujesz z niej zrobic plaska tablice [...]. Uzyj reduce
const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// 7 Masz taka liste zakupów, podlicz ile bedzie kosztowac taki koszyk zakupow (wynik: 227005 :) )
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];



// 8. Masz liste z glosowania obywateli. Sprawdz jak rozklado sie glosowanie w przedzialach wiekowych
// 18-25 - young, 26-35 - medium, 36-55 - senior

// Oczekiwany rezultat: { young: 1, medium: 3, senior: 3 }
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];





///





// const car = {
//   make: "Ford",
//   model: "Explorer",
//   year: 2008,
//   color: "red",
//   fuel: "gas",
//   mpg: 18,
//   doors: "",
//   maxSpeed: ""
// };

//1. Uzywajac metody for ... in wyswietl wszystkie pola obiektu car


//2. Uzywajac metody for ... in wyswietl wszystkie wartosci z obiektu car w takim porządku:
//   "nazwaPola": "wartosc Pola"


//3. Uzywajac metody for ... in stworz nowy obiekt ktory bedzie zawieral pola z obiektu car tylko te ktore maja NIE pusta wartość
// Oczekiwana struktura nowego obiektu:
//
// const nonEmptyCar = {
//   make: "Ford",
//   model: "Explorer",
//   year: 2008,
//   color: "red",
//   fuel: "gas",
//   mpg: 18
// }


//4. Uzywajac metody Object.values() wyswietl wszystkie wartosci pól z obiektu car

//5. Uzywajac metody Object.keys() wyswietl wszystkie nazwy pól z obiektu car

//6. Korzystajac z metody Object.values() pokaz tylko te wartosci pól które nie są puste


//7 Sprawdz czy w obiecie car sa pola: isBike, gas, eco, mpg, year
// I wydrukuj to w formacie:
// Obiekt ma pole isBike: false,
// Obiekt ma pole gas: false,
// Obiekt ma pole mpg: true,
// itd.


//8. PRzy uzyciu metody Object.entries() zamien obiekt car na tablice w formacie [[klucz, wartosc], [klucz, wartosc], ...]


