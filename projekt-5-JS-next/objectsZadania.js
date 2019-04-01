

// // const myFirstObject = {};
// // console.log(myFirstObject)

// // const bike = {

// //     nazwa: 'Giant',
// //     rozmiarRamy: 24,

// //     sayMyName: function() {
// //       console.log( this.nazwa);
// //     },

// //     go: function() {
// //         this.km = this.km + 1;
// //     },
// //     stop: function() {
      
// //     },
// //     repair: function() {
      
// //     },
// //     sayMyName: function() {
      
// //     },
// //     showMySize: function() {
      
// //     }

// // };

// // bike.kilometers = 0;
// // console.log(bike)
// // console.log(scroll.top)


// ////////////////////////////////////////////////////////////////

// // const car = {

// //     model: 'e46',
// //     age: 20,

// // }

// // const person = {

// //   name: 'marcin',
// //   age: 25,

// // }

// //2. Stwórz funkcję, której przekazując obiekt wypisze nazwy pól
// // const showProperties = function(myCar) {

// //     console.log(Object.keys(myCar));
// //     console.log(Object.values(myCar));
// // }

// // showProperties(car)

// // const showProperties = function(object) {

// //   Object.keys()
// // }










// // Zadania:

// // 1.
// // Przy uzyciu funkcji for napisz petle ktora zamieni tekst elementow z tablicy na pisane duzymi literami:
// const ex1 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];

// // ex1.forEach( function(element, i) {
// //    ex1[i] = element.toUpperCase();
// // })
// // console.log(ex1)

// //2. Wykonaj to samo zadanie z funkcja map
// // const ex2 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];

// // const exToUpperCase = ex1.map(function(name) {
// //       return name.toUpperCase();
// // })
// // console.log(exToUpperCase)

// //3. Dostajesz z jakiegoś zródła danych taki napis:

// // const names = "anna maciej michal Monika JOANNA"

// // //Potrzebujesz zrobic z tego liste.
// // const listNames = names.split(' ')
// // console.log(listNames)
// // //Nastepnie wyswietl tylko kobiece imiona
// // const famaleNames = listNames.charAt(.length-1) === 'a'
// // //Nastepnie spraw aby pierwsza litera byla zawsze duza, a reszta imienia byla malymi literami


// //4.
// //Dostajesz liste obiektow. Kazdy obiekt zawiera informacje odnosnie uzytkownika (jego imie, nazwisko, wiek)
// //Wyswietl te dane w formie przyjaznej uzytkownikowi
// const users = [
//   {
//     name: "Michal",
//     lastname: "Kowalski",
//     age: "23"
//   },
//   {
//     name: "Jan",
//     lastname: "Zielony",
//     age: "12"
//   },
//   {
//     name: "Kuba",
//     lastname: "Czerwony",
//     age: "82"
//   },
//   {
//     name: "Joanna",
//     lastname: "Niebieska",
//     age: "31"
//   },
//   {
//     name: "Anna",
//     lastname: "Brazowa",
//     age: "26"
//   },
//   {
//     name: "Agnieszka",
//     lastname: "Zolta",
//     age: "18"
//   },
// ];


// //5. Do swojej aplikacji planujesz dodac nowa funkcjonalnosc. Osoby ponizej 18 roku zycia musza byc odpowiednio oznaczone.
// // Dodaj do kazdego obiektu w tablicy pole isAdult, ktore bedzie mialo wartosc true jesli osoba jest pelnoletnia, i wartosc false jesli nie jest
// // pelnoletnia


// //6 Orzymales tablice tablic [[..], [...]], potrzebujesz z niej zrobic plaska tablice [...]. Uzyj reduce
// const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// // 7 Masz taka liste zakupów, podlicz ile bedzie kosztowac taki koszyk zakupow (wynik: 227005 :) )
// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// // 8. Masz liste z glosowania obywateli. Sprawdz jak rozklado sie glosowanie w przedzialach wiekowych
// // 18-25 - young, 26-35 - medium, 36-55 - senior

// // Oczekiwany rezultat: { young: 1, medium: 3, senior: 3 }
// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// // const votersData = voters.reduce( function(result, voter) {

// //   if ( voter.age >= 18 && voter.age <= 25 && voter.voted === true ) {
// //       result['young']  += 1
// //       return result
// //   }

// //   if ( voter.age >= 26 && voter.age <= 35 && voter.voted === true  ) {
// //       result['medium']  += 1
// //       return result
// //   }

// //   if ( voter.age >= 36 && voter.age <= 55 && voter.voted === true  ) {
// //       result['senior']  += 1
// //       return result
// //   }

// //   return result

// // }, { young: 0, 
// //     medium: 0, 
// //     senior: 0 
// //   })

// //   console.log(votersData)


// ///////////





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

// // //1. Uzywajac metody for ... in wyswietl wszystkie pola obiektu car

// // for ( let carProperty in car ) {
// //   console.log(carProperty)
// // }


// // //2. Uzywajac metody for ... in wyswietl wszystkie wartosci z obiektu car w takim porządku:
// // //   "nazwaPola": "wartosc Pola"

// // for ( let carValues in car ) {
// //   console.log("nazwaPola: " + car[carValues])
// // }


// //3. Uzywajac metody for ... in stworz nowy obiekt ktory bedzie zawieral pola z obiektu car tylko te ktore maja NIE pusta wartość
// // Oczekiwana struktura nowego obiektu:
// //
//   // const nonEmptyCar = {
//   //   make: "Ford",
//   //   model: "Explorer",
//   //   year: 2008,
//   //   color: "red",
//   //   fuel: "gas",
//   //   mpg: 18
//   // }


// //   const nonEmptyCar = {};

// //   for ( let property in car) {

// //     if(car[property].toString().length > 0) {
// //       nonEmptyCar[property] = car[property]
// //     }
// //   }
// // console.log(nonEmptyCar)

// //4. Uzywajac metody Object.values() wyswietl wszystkie wartosci pól z obiektu car

//   // console.log(Object.values(car));

// //5. Uzywajac metody Object.keys() wyswietl wszystkie nazwy pól z obiektu car

//   // console.log(Object.keys(car));

// //6. Korzystajac z metody Object.values() pokaz tylko te wartosci pól które nie są puste


// //7 Sprawdz czy w obiecie car sa pola: isBike, gas, eco, mpg, year
// // I wydrukuj to w formacie:
// // Obiekt ma pole isBike: false,
// // Obiekt ma pole gas: false,
// // Obiekt ma pole mpg: true,
// // itd.


// //8. PRzy uzyciu metody Object.entries() zamien obiekt car na tablice w formacie [[klucz, wartosc], [klucz, wartosc], ...]









// ///////////////////////////////////////////////////////////////////////////////////////
// //
// //
// // Niedziela 


// // const Car = function(model, age) {

// //     this.model = model;
// //     this.age = age;

// //     this.sayMyModel = () => {
// //       console.log(this.model + this.age);
// //     }

// // }

// // const myCar = new Car('fiat ', 20);
// // myCar.sayMyModel();


// 1 Napisz funkcje która przyjmuje 2 liczby jako argument i zwraca liczbę, która jest większa.
//Użyj ternary operator


// const comp = ( first, second ) => {
//   return first > second ? first : second;
// }
// console.log(comp(24,4));




// 2
// Na podstawie ponizszych danych, wylistuj logi, ktore wystapily po 1 stycznia 2019 roku.

const logs = [
  {
    type: 'error',
    message: 'Error on production',
    date: 'December 17, 2018'
  },
  {
    type: 'warning',
    message: 'Only warning - problem with message',
    date: 'January 12, 2019'
  },
  {
    type: 'log',
    message: 'Log data',
    date: 'January 17, 2018'
  },
  {
    type: 'critical',
    message: 'Critical Error on producition',
    date: 'February 21, 2019'
  },{
    type: 'error',
    message: 'Error on production',
    date: 'March 28, 2019'
  },
  {
    type: 'log',
    message: 'only log data -> dont worry ',
    date: 'February 27, 2019'
  },
  {
    type: 'critical',
    message: 'Critical error, do something',
    date: 'February 22, 2019'
  },
  {
    type: 'warning',
    message: 'Just warning',
    date: 'December 11, 2018'
  },
  {
    type: 'bug',
    message: 'We found a bug!',
    date: 'March 27, 2019'
  },
  {
    type: 'error',
    message: 'Error on production',
    date: 'December 1, 2018'
  }
];


const date = new Date('January 1, 2019');
console.log(date)

const newestLogs = logs.reduce((result, log) => {

    console.log(log);
    const dateInMs = new Date(log.date).getTime();

    if ( dateInMs >= date ) {
        result.push(log)
    }
    return result;

}, [])

console.log(newestLogs)
console.log(new Date().getTime());
console.log( new Date().getHours())

// Napisz funkcje ktora wyswietli najnowszy blad z logow.
// Napisz funkcje ktora wyswietli najstarszy blad.







// 3 Napisz funkcje ktora dla tablicy logs policzy ile bylo jakich rodzajow bledow.
// Oczekiwany wynik { error: 3, warning: 2, log: 2, critical: 2, bug: 1 }


// Uwaga, funkcja musi byc uniwersalna nie deklaruj nigdzie jawnie typów pól






// 4
// Dostajesz od swojego dostawcy dancyh takie dane w takim formacie:
const data = ['name', 'Michal', 'lastName', 'Kowalski', 'age', '21', 'job', 'programmer'];

// Stworz z tego obiekt
// {
//   name: ...
//   lastName: ...
//   ...
// }
// Jesli bedziesz potrzebowal zobacz jakie jeszcze dane przyjmuje metoda reduce:
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce







// 5
// policz ile oskarów dostały filmy w danych kategoriach
// Oczekiwany wynik:
// {
//   'New Releases': 7,
//   Dramas: 3
// }

var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "title": "Die Hard",
        "rating": 4.0,
        "oscars": 2
      },
      {
        "title": "Bad Boys",
        "rating": 5.0,
        "oscars": 0
      },
      {
        "title": "Harry Potter",
        "rating": 5.0,
        "oscars": 1
      },
      {
        "title": "Mission Impossible ",
        "rating": 3.0,
        "oscars": 0
      },
      {
        "title": "Matrix",
        "rating": 5.0,
        "oscars": 4
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "title": "Green book",
        "rating": 5.0,
        "oscars": 1
      },
      {
        "title": "12 Strong",
        "rating": 3.0,
        "oscars": 2
      },
      {
        "title": "Leave no trace",
        "rating": 3.0,
        "oscars": 0
      },
      {
        "title": "Creed 2",
        "rating": 4.5,
        "oscars": 0
      },
    ]
  }
];





// 6 Dostajesz liste z plikami jakie sa na serwerze:
const files = ['index.php', 'img1.png', 'img2.jpg', 'index.html', 'script.js', 'script2.js', 'script3.js', 'file.bmp',
  'run.exe', 'script.sh'];

// Chcesz pokazac uzytkownikowi jakie rozszerzenia znajduja sie na serwerze, ale uwaga,  nie chcesz
// pokazac uzytkownikowi, ze sa takie rozszerzenia jak exe, sh -  Chcesz to ukryc przed uzytkownikiem
// Jezeli plikow jednego typu jest kilka, to w wynikowej liscie powinna byc tylko jedna informacja o tym typie
// Oczekiwany rezultat: ['.php', '.png', '.jpg', '.html', '.js', '.bmp']







// 7
// Dla danej tablicy wylicz wage slowa. Waga slowa to suma indexow kazdej litery w alfabecie
// Wyswietl slowo o najwiekszej wadze
// Oczekiwana opowiedz "Parmezan"
const alphabet = 'abcdefghijklmnoprstuwxyz';
const names = ['Kalafior', 'Brokuł', 'Pomidor', 'Banan', 'Parmezan', 'ABCS', 'AAAAa']








//8 Z obiektu:
const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4'
};
//
// // Stworz taka tablice:
// // [ 'key1',
// //   'value1',
// //   'key2',
// //   'value2',
// //   'key3',
// //   'value3',
// //   'key4',
// //   'value4' ]

// // Nie korzystaj z metody Object.entries()










//9 Z obiektu:
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: '',
//   key4: '',
//   key5: null,
//   key6: undefined,

// };
//
// Stworz nowy obiekt ktory nie zawiera pustych pól, lub pól z wartościami null, undefined
// // Nie korzystaj z metody Object.entries()





//10
// Napisz funkje, ktora tych obiektow:
const users = [
  {
    name: "Michal",
    lastname: "Kowalski",
    age: "23"
  },
  {
    name: "Jan",
    age: "12"
  },
  {
    name: "Kuba",
    lastname: "Czerwony",
    age: "82"
  },
  {
    name: "Joanna",
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

// dodaje nowe pole fullName i wypelnia je wartoscia z imienia i nazwiska name + lastName
// Uwaga niektore obiekty nie posiadaja pola lastName. Jestli taka sutuacja wystapi, nie dodawaj takiej osoby do nowej listy




// function scrollTop() {
//   let body = document.querySelector(body)
//   console.log(body.scrollTop())
// }

// scrollTop()


window.onscroll = function() {
  let test = window.pageYOffset || document.documentElement.scrollTop;
  console.log(Math.round(test))
}