// function showName(a,b) {
//     return a + b;
// }
// console.log(showName(2,3))



/*
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem
*/
    // function sayHi(name) {
    //     console.log(name);
    // }
    // sayHi("Marcin");

//  TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
//     - zwraca stringa z powitaniem, np: 'Hello my dear Tomek!'
//     - wynik funkcji przypisz do zmiennej o nazwie greetingF
//     - zadeklaruj funkcję jako function declaration oraz jako function expression 
   
//     function showName(firstName, lastName) {
//         var nameIntro = "Hello my dear " +firstName + ' '+ lastName ;
//         return nameIntro;
//     }
//     var greeting = showName('Marcin', 'Galera');
//     // console.log(greeting)

//  TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
//     - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
//       dokleja stringa "I love you!"*
//     - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" 


//     (function(e) {
//     function showNamee() {
//     var love = " I love you"
//     return greeting + love
//     }
//     console.log(showNamee())
// })()

// TODO: 4. Opakuj kod z tego pliku w IIFE.










/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================
Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na wielkie litery
- string.toUpperCase() - konwersja na małe litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca liczbę jego znaków

        // function showName(firstName) {
        //     return firstName.length;
        // }
        // var nameLength = showName('Marcin');
        // console.log(nameLength);

// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces.

        // function whiteSpaces(white) {
        //     return white.trim()
        // }
        // var cleanSpaces = whiteSpaces("  mar cin    ");
        // console.log(cleanSpaces);

// cleanText('foobar');

//  TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    //  var nameOne = 'Rambo';
    //  var nameTwo = 'R_a_m_b_o';
    //  var nameThree = 'ROX1aOX1mOX1bOX1o';

    //     function changeLetter(nameOne) {
    //         return nameOne.split("");
    //     }
    //     var rambo = changeLetter(nameOne)
    //     console.log(rambo)

    //     function changeLetter2(nameTwo) {
    //         return nameTwo.split("_");
    //     }
    //     var rambo2 = changeLetter2(nameTwo);
    //     console.log(rambo2);

    //     function changeLetter3(nameThree) {
    //         return nameThree.split("OX1");
    //     }
    //     var rambo3 = changeLetter3(nameThree);
    //     console.log(rambo3);

/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa
*/
// var text = 'EXPIRED';

//     function firstThreeLetters(text) {
//         return text.slice(0, 3)
//     }
//     var test = firstThreeLetters(text)
//     console.log(test)

//     function lastThreeLetter(text) {
//         return text.slice(-3)
//     }
//     var test1 = lastThreeLetter(text)
//     console.log(test1)

// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"

//     var capt = "kapitalizuje";
//     function capitalize(stringToUp) {
        
//         console.log(stringToUp.toUpperCase())
//     }
//   capitalize(capt);


// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej
    // var urlToReplace = 'users/{id}';

    // function replace(idReplace) {
    //     return idReplace.replace("{id}", "3")
    // }
    // var newUrl = replace(urlToReplace);
    // console.log(newUrl)

/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki
*/
    // function cleanString(whiteSpaces) {
    //     return whiteSpaces.trim().toUpperCase().slice(0, 2)
    // }
    // var cleanLe = cleanString("  Marcin");
    // console.log(cleanLe);

    /* var aa = whiteSpaces.trim().toUpperCase().slice(0, 2)
     return aa  */



/*====================================================
NUMBERS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
=====================================================
Wskazówki do zadań:
- Number.parseFloat(val) - konwersja stringa na liczbę
- val.toFixed() - dokładność liczb po przecinku
- val.toString() - konwersja number do string */

// TODO: 1. Napisz funkcję, która pobiera liczbę i zwraca ją skonwertowaną na string

    // function numberToString(string1) {
    //     var ll = string1.toString()
    //     return ll
    // }
    // console.log (numberToString(33))

// TODO: 2. Napisz funkcję, która pobiera stringa i zwraca go skonwertowanego na number

        // function stringToNumber(number) {
        //     return parseFloat(number)
        // }
        // console.log(stringToNumber("44"))

/* TODO: 3. W poniższych zmiennych, doprecyzuj rozwinięcie dziesiętne. Nadpisz wartość zmiennych nową wartością.
    - var powerHorses = 233; do 3 liczb po przecinku
    - var score = 10.33344; do 2 liczb po przecinku */

    // var powerHorses = 233;
    // var score = 10.33344;

    // function threeNumbers(val) {
    //     console.log(val.toFixed(3));
    // }
    // threeNumbers(powerHorses);

    // function twoNumbers(val) {
    //     console.log(val.toFixed(2)) 
    // }
    // twoNumbers(score)
    



/*
 =====================================================
 DATE: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
 =====================================================
 Wskazówki do zadań:
- Date.now() - zwraca aktualną datę
- Obiekty typu date można odejmować - różnica jest czasem podanym w milisekundach
*/

//  Napisz funkcję, która obliczy ile mineło godzin pomiędzy dwoma datami.
    // getHours("1995,12,01", "2000,03,04") - 37320

// console.log(Date.now())


/*
 -----------------------------------------------------

 2. Napisz funkcję, której podasz datę swoich urodzin, a ona zwróci Twój wiek w z dokładnością
    do dwóch liczb po przecinku

 -----------------------------------------------------
*/

/*
 =====================================================
 EXTRA TASKS
 =====================================================
/*
1. Napisz funkcje, która zwraca losową całkowitą liczbę, w zadanym zasięgu (zasięg to dwa parametry - min i max):
 e.g getRandomValue(1, 10) - zwraca losową, całkowita liczbę w zasięgu od 1 do 10
 e.g getRandomValue(100, 1023) - zwraca losową, całkowita liczbę w zasięgu od 100 do 1023

 -----------------------------------------------------
 CODE GOES BELOW */
    // function randomNumber() {
    //     return console.log( { Math.random() * (1023-100+1) +100 }.toFixed())
    // }
    // randomNumber()

    
/*
 -----------------------------------------------------
2. Napisz funkcję, która jako parametr przyjmuje Twoje imię i nazwisko,
 i zwraca Twoje inicjały rozdzielone kropką.
 e.g getInitials("John Doe") - zwraca "J.D."

 -----------------------------------------------------
 CODE GOES BELOW */

/*
 -----------------------------------------------------

3. Napisz funkcję, która jako parametry przyjmuje dwa stringi.
    - Pierwszy parametr to zdanie.
    - Drugi parametr to słowo, które ma w tym zdaniu zostać zastąpione trzema gwiazdkami.
    - funkcja finalnie ma zwracać poprawione zdanie, tzn:

   e.g validateSentence("kurde co za dzień", "kurde"); // OUTPUT: "*** co za dzień";

   ** zadanie z gwiazdką - zrób tak, aby powyższa funkcja podmieniała każde wystąpienie przekazanego słowa
   e.g validateSentence("kurde co za dzień, kurde", "kurde"); // OUTPUT: "*** co za dzień, ***";

 -----------------------------------------------------
 CODE GOES BELOW */

/*
 -----------------------------------------------------
 */
// Collapse















///////////////////// Local Storage ///////////////////////////////////////////////////////////////////////////


/*
 =====================================================
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 =====================================================
*/
var cars = [{
    manufacturer: 'Porsche',
    model: '911',
    price: 135000,
    currency: 'USD',
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
},{
    manufacturer: 'Nissan',
    model: 'GT-R',
    price: 80000,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Nissan_Gt-r',
},{
    manufacturer: 'BMW',
    model: 'M3',
    price: 60500,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Bmw_m3',
},{
    manufacturer: 'Audi',
    model: 'S5',
    price: 53000,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
},{
    manufacturer: 'Audi',
    model: 'TT',
    price: 40000,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Audi_TT',
}];

/*
1. a:Napisz metode która zapisuje cars do localStorage
*/
// var carsJSON = JSON.stringify(cars);
// localStorage.setItem('cars', carsJSON)
// /*
//  b:Napisz metode ktora pobiera cars z localStorage
// */
// var savedCarsString = localStorage.getItem('cars')
// console.log(savedCarsString)

// 2. Dodaj metode która przed zapisywaniem będzie usuwała samochody z cena < 60000

function saveToLocalStorage() {
for( i = 0; i < cars.length; i++) {
    if(cars[i].price > 60000) {
        var carsJSON = JSON.stringify(cars[i]);
        localStorage.setItem('cars', carsJSON)
    }
}
}
saveToLocalStorage()

var exchangeRateUSDPLN = 3.7;
// 3. Dodaj metode która po pobraniu zamieni cene na złotowki

// 4. Dodaj metode która po pobraniu sprawdzi czy znajduje sie samochod o wartosci 666
//  jesli tak to usunie dane z localStorage