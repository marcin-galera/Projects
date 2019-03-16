// TODO: 1. Podepnij ten plik do pliku index.html
// TODO: 2. Zadeklaruj 2 zmienne typu string
// TODO: 3. Zadeklaruj 2 zmienne typu number
// TODO: 4. Zadeklaruj 2 zmienne typu boolean
// TODO: 5. Zadeklaruj zmienna typu undefined
// TODO: 6. Zadeklaruj zmienna typu null
// TODO: 7. Zadeklaruj tablicę zawierajacą zmienne typu string
// TODO: 8. Zadeklaruj tablicę zawierajacą zmienne różnego typu
// TODO: 9. Zadeklaruj obiekt o nazwie person zawierajacy pola:
// TODO: 10. Sprawdź typ co najmniej jeden zmiennej z poprzednich zadań
// TODO: 11. Nadpisz wartość dowolnej zmiennej zadeklarownej w poprzednim zadaniu


// OBJECT & ARRAY - GETTING VALUES
//     var skills = [
//         'JavaScript', // 0
//         'HTML', // 1
//         'CSS' // 2
//         // 3
//         ];
//     console.log(skills);

// TODO: 1. Wyświetl w konsoli wartości elementów tablicy skills
// TODO: 2. Wyświetl w konsoli liczbę elementów w powyższej tablicy skills
// TODO: 3. Wyświetl w konsoli wartości pól name / year / isDamaged z obiektu car
//         var car = {
//             name: 'Mazda',
//             year: 1998,
//             isDamaged: true
//         };
//TODO: 4. Do tablicy users, dopisz dwóch dodatkowych userów
//   var users = [
//       {login: 'John', password: 'h4x'},
//       {login: 'Johhny', password: 'lubie_placki'},
//   ];
// TODO 4.a) Wyświetl w konsoli login i password usera na indeksie "2" w tablicy users
// TODO 4.b) Stwórz console.loga który dostaje stringa:
//    - "USER CREDENTIALS ARE: LOGIN_USERA : PASSWORD_USERA"
// TODO: 5. Wyśwetl w konsoli tablicę z frameworkami developera
//   var developer = {
//       name: 'John Doe',
//       city: 'Gdansk',
//       otherInfo: {
//           skills: {
//               frameworks: ['Angular', 'React', 'Vue'],
//               tools: ['Webstorm', 'Gulp', 'GIT']
//           }
//       }
//   };  
  // TODO: 6. Wyśwetl w konsoli tablicę z frameworkami drugiego developera
//   var developers = [
//       {
//           name: 'John Doe',
//           otherInfo: {
//               skills: {
//                   frameworks: ['Angular', 'React', 'Vue'],
//                   tools: ['Webstorm', 'Gulp', 'GIT']
//               }
//           }
//       },
//       {
//           name: 'John Doe',
//           otherInfo: {
//               skills: {
//                   frameworks: ['Angulassrss', 'React', 'Vue'],
//                   tools: ['Webstorm', 'Gulp', 'GIT']
//               }
//           }
//       }
//   ];
// TODO: 7. Wyświetl w konsoli kolejno wszystkie firmy w jakich pracował drugi pracownik tablicy workers
//   var workers = [
//       {
//           name: 'John',
//           experience: [
//               { years: '1998-2004', company: 'Google' },
//               { years: '2004-2011', company: 'Microsoft' },
//               { years: '2012-2015', company: 'Facebook' }
//           ]
//       },
//       {
//           name: 'Samanta',
//           experience: [
//               { years: '1998-2008', company: 'Infoshare' },
//               { years: '2010-2014', company: 'Amazon' },
//               { years: '2014-2017', company: 'Intel' }
//           ]
//       }
//   ];



//TODO.1 Napisz instrukcję IF  / ELSE, która:
// - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
// jeśli zmienna developer jest równa 'junior js dev'
// - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");

// TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
//     - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
//     - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
//     - wyświetli console.log("czas na studia") jeśli Twój wiek jest <= 33 i > 18
//     - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18

//  TODO.3: Napisz instrukcje, która zwraca true jeśli:
//     - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 
    // var skill = 'javaScript'
    //     if ( skill === 'javaScript' || skill === 'HTML' || skill === 'CSS' ) {
    //         console.log(true);
    //     }

    // var skill = 'javaScript'
    //     var check123 = skill === 'javaScript' || skill === 'HTML' || skill === 'CSS'
    //     console.log(check123);



// TODO.4: Wykorzystując SWITCH, napisz instrukcje, która jako parametr przyjmuje stringa o nazwie day i:
//  - która wyrzuca w konsoli wymyślony tekst, w zależności czy "case" jest spełniony
//  - case mają odpowiadać kolejnym dniom: "Monday", "Tuesday", "Wednesday" etc...
//  - ma być parę przynajmniej przypadków (np. Monday, Tuesday, Saturday)
//  - w przypadku jeśli case nie pasuje do żadnego przypadku, to funkcja ma wyświetlić w konsoli tekst: "Taki dzień nie istnieje!";
 
// switch('moddday') {
//     case 'monday':
//         console.log('jest poniedzialek');
//         break;
//     case 'Thursday':
//     console.log('jest wtorek');
//         break;
//     default:
//     console.log('poddaje sie');
// }

// TODO.5: Wykorzystując TERNARY OPERATOR:
//     - przypisz do zmiennej price wartość: '2.00$' jeśli isMember = true a jeśli nie to '10.00$';

// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy
//  var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];

// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=
// var totalPrice = 0;
// var prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];

// TODO.3: Zwróć sumę cen drinków z tablicy drinks
// var price = 0
// var totalPrice = 0;
// var drinks = [
//   {name: '  Vodka', price: 19.99},
//   {name: 'Whisky  ', price: 40.00},
//   {name: 'Prosseco  ', price: 35.99},
//   {name: '  Beer', price: 3.20},
//   {name: '   Vine  ', price: 16.50},
//   {name: '  Gin  ', price: 23.30}
// ];

// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

// TODO.5. Za pomocą pętli, doklej jednostkę PLN do cen, zastosuj dekremenację!

// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces

// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *

// TODO.8: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka
// var drinks = [
//   {name: '  Vodka', price: 19.99},
//   {name: 'Whisky  ', price: 40.00},
//   {name: 'Prosseco  ', price: 35.99},
//   {name: '  Beer', price: 3.20},
//   {name: '   Vine  ', price: 16.50},
//   {name: '  Gin  ', price: 23.30}
// ];

// Dana jest tablica drinks
// var drinks = [
//     {name: 'Vodka', price: 19.99},
//     {name: 'Whisky', price: 40.00},
//     {name: 'Prosseco', price: 35.99},
//     {name: 'Beer', price: 3.20},
//     {name: 'Balieys', price: 50.20},
//     {name: 'Bacardi', price: 35.50},
//     {name: 'Vine', price: 16.50},
//     {name: 'Gin', price: 23.30}
//   ];
  
  // TODO.1: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //     - cena jest niższa 30.00 
  
  // TODO.2: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //  - cena jest wyższa niż 20 ale jednocześnie niższa lub równa 40 
  
  // TODO.3: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //  - nazwa ma więcej niż 4 litery

  // TODO.4: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //  - nazwa zaczyna się na literkę "B" lub na literkę "V" 
  
  // TODO.6: Za pomocą pętli, doklej do każdego drinka pole:
  //  - isExpensive: true jeśli cena jest wyższa niż 30
  //  - isExpensive: false jeśli cena jest niższa lub równa 30
  //  - oczekiwany, przykładowy efekt:
  //  { name: 'Bacardi', price: 35.50, isExpensive: true },
  //  { name: 'Vine', price: 16.50,  isExpensive: false }
  
  //  TODO.7: Za pomocą pętli, wyświetl w konsoli nazwe drinka:
  //  - którego cena jest równa 50.20, a po wyświetleniu console.log przerwij natychmiast pętlę 
  
  // TODO.8: Za pomocą pętli, wyświetl w konsoli następujacy tekst:
  //     - "Cena _NAME_ wynosi _PRICE_"
  //     - przeskocz powyższy console.log jeśli cena jest równa 3.20 lub 19.99



// var users = [
//   { login: 'Bon@yth', pin: 3410, password: 'w@4x@' },
//   { login: 'Aver@num', pin: 5511, password: 'qa@a@xx@x' },
//   { login: 'Ko@get', pin: "2220", password: '4@311' },
//   { login: 'Dra@co', pin: 8890, password: 'v@v@' },
//   { login: 'Rave@n', pin: "6551", password: 'an@ia15' },
//   { login: 'Spa@wn', pin: 1211, password: 'q@we@' }
// ];

// TODO: 1. Puść pętlę po tablicy users. Sprawdź czy pin jest liczbą, jeśli nie to przerób go na liczbę

// TODO: 2. Puść pętlę po tablicy users. Dodaj dynamicznie do obiektów pole isPasswordOK,
// które ma mieć wartość true jeśli password jest dłuższy niż 5 liter, a jak nie to false

// TODO: 3. Puść pętlę po tablicy users. Usuń znak @ z każdego loginu.

// TODO: 4. Puść pętlę po tablicy users. Usuń znak @ z każdego password.

// TODO: 5. Puść pęte po tablicy users. Wyświetl w konsoli login z parzystych rekordów tablicy.

// TODO: 6. Puść pęte po tablicy users. Wyświetl w konsoli login z nieparzystych rekordów tablicy.


// TODO: 7. Napisz funkcję, która przerobi zdanie "ala ma kota" na zdanie "Ala Ma Kota".
// var a = "ala ma kota"

// function alA(x) {
//   var b = x.split(" ")
//   var c ="";
//   for (var i = 0; i < b.length; i++) {
//       b[i]=b[i].replace(b[i].charAt(0),b[i].charAt(0).toUpperCase())
//   }
 
//   console.log(b.join(" "))
// }
// alA(a)

// var attractions = [
//   ['Eifel', 'Chiński Mur', 'Pałac Kultury'],
//   ['Piramidy', 'Molo', 'Zamek Krzyżacki'],
//   ['Skansen', 'Wawel', 'Starówka']
// ];
// TODO.1: za pomocą pętli w pętli, wyświetl wszystkie nazwy atrakcji

// TODO: 0. W jednym console.logu(2 parametry) wyswietl index jezyka 'English' i nazwe ostatniego jezyka z langs

// TODO: 1. Do tablicy users, dodaj nowego użytkownika na początku i na koncu tablicy
// var logins = [
//     {login: 'John', password: 'h4x'},
//     {login: 'Kajtek', password: 'lubie_placki'},
// ];


/* TODO: 2a. dodaj parametr isAvaiable do przedmiotw z kolekcji items jesli jest wypozyczony przyjmuje wartosc false inaczej wartosc true
        2b. stworz kolekcje rentedItems ktora bedzie zawierala przedmioty z isAvaiable===false od najnizszego id do najwyzeszego przy zalozeniu ze w kolekcji items elementy posiadaja rosnace wartosci id
*/        
// var rentedItemsIds = [2, 5, 29, 32, 34];
// var items = [
//   {id: 1, name: 'Konewka'},
//   {id: 2, name: 'Łopata'},
//   {id: 3, name: 'Szlauf'},
//   {id: 4, name: 'Grabki'},
//   {id: 5, name: 'Doniczka1'},
//   {id: 6, name: 'Sweter'},
//   {id: 29, name: 'Krzesło'},
//   {id: 32, name: 'Doniczka2'},
//   {id: 38, name: 'Rura'}
// ];

/* TODO: 3a. Wyświtl obiekt użytkownika nieposiadającego hasła w konsoli
          3b Dla użytkownika nieposiadającego uzupełnionego hasła wyświetl w konsoli: "Proszę NAZWA_UZYTKOWNIKA o uzupełnienie hasła"
          3c Uzupełnij brakujące hasło w kolekcji users    
  */
// var users = [
//     {login: 'Bartek', password: 'Testtest'},
//     {login: 'Kamil', password: 'Testtest12'},
//     {login: 'Agatka', password: 'Agatka1'},
//     {login: 'Anastazja', password: '12341234'},
//     {login: 'Władzia', password: 'XjsdSASDsd'},
//     {login: 'John', password: null},
//     {login: 'Bartek', password: 'SdsSsadsad'},
//     {login: 'Asia', password: 'lubie_placki'},
// ];

// TODO: 4. Jesli login w users zaczyna się na A albo W wyciągnij tych użytkowników i stwórz osobną tablice z tymi użytkownikami

// TODO: 5a Powtarzajace sie hobby u pary uzytkownikow wyswietl w konsoli
//       5b Wyswietl w konsoli "Hobby NAZWA_HOBBY jest wspoldzielone przez UZYTKOWNIK i UZYTKOWNIK "

// var persons = [
//   { login: 'Bartek', hobby: ['tenis', 'poker', 'footbal'] },
//   { login: 'Kamil', hobby: ['pływanie', 'programowanie'] },
//   { login: 'Agatka', hobby: ['poker', 'taniec'] },
// ];

// //pierwsza metoda
// var hobbies = [];

// for (var i = 0; i < persons.length; i++) {
//   for (var j = 0; j < persons[i].hobby.length; j++) {
//       hobbies.push(persons[i].hobby[j]);
//   }
// }

// for (var i = 0; i < persons.length; i++) {
//   hobbies.splice(0, persons[i].hobby.length);
//   for (var j = 0; j < persons[i].hobby.length; j++) {
//       if (hobbies.indexOf(persons[i].hobby[j]) >= 0) {
//           console.log("Hobby " + persons[i].hobby[j] + " jest wspoldzielone.");
//       }
//   }
// }

// //druga metoda
// var hobbies2 = [];

// for (var i = 0; i < persons.length; i++) {
//   for (var j = 0; j < persons[i].hobby.length; j++) {
//       hobbies2.push({ login: persons[i].login, hobby: persons[i].hobby[j] });
//   }
// }

// for (var i = 0; i < hobbies2.length; i++) {
//   for (var j = i + 1; j < hobbies2.length; j++) {
//       if (hobbies2[i].hobby === hobbies2[j].hobby) {
//           console.log("Hobby " + hobbies2[i].hobby + " jest wspoldzielone przez " + hobbies2[i].login + " i " + hobbies2[j].login);
//       }
//   }
// }

// //trzecia metoda
// var hobbies3 = [];
// var duplicatedHobbies = [];

// for (var i = 0; i < persons.length; i++) {
//   hobbies3 = hobbies3.concat(persons[i].hobby);
// }
// for (var i = 0; i < hobbies3.length; i++) {
//   if (hobbies3.indexOf(hobbies3[i]) !== i) {
//       duplicatedHobbies.push(hobbies3[i]);
//   }
// }
// console.log(duplicatedHobbies);
// //czwarta metoda
// var hobbiesMap = {};

// for (var i = 0; i < persons.length; i++) {
//   for (var j = 0; j < persons[i].hobby.length; j++) {
//       if (!hobbiesMap.hasOwnProperty(persons[i].hobby[j])) {
//           hobbiesMap[persons[i].hobby[j]]=[persons[i].login];
//       } else {
//           hobbiesMap[persons[i].hobby[j]].push(persons[i].login);
//       }
//   }
// }

// var hobbies4 = Object.keys(hobbiesMap);
// for (var i = 0; i < hobbies4.length; i++) {
//   if (hobbiesMap[hobbies4[i]].length > 1) {
//       console.log(hobbiesMap[hobbies4[i]].join(', ') + ' maja wspólne hobby ' + hobbies4[i]);
//   }
// }





// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem

//  TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
//     - zwraca stringa z powitaniem, np: 'Hello my dear Tomek!'
//     - wynik funkcji przypisz do zmiennej o nazwie greetingF
//     - zadeklaruj funkcję jako function declaration oraz jako function expression 
   
//  TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
//     - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
//       dokleja stringa "I love you!"*
//     - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" 

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

// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces.
// cleanText('foobar');

//  TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    //  var nameOne = 'Rambo';
    //  var nameTwo = 'R_a_m_b_o';
    //  var nameThree = 'ROX1aOX1mOX1bOX1o';

/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa
*/
// var text = 'EXPIRED';

// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"

// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej
    // var urlToReplace = 'users/{id}';

//  TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
//     - czyści go z whitespaceów
//     - litery konwertuje na wielkie
//     - zwraca 2 pierwsze znaki




/*====================================================
NUMBERS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
=====================================================
Wskazówki do zadań:
- Number.parseFloat(val) - konwersja stringa na liczbę
- val.toFixed() - dokładność liczb po przecinku
- val.toString() - konwersja number do string */

// TODO: 1. Napisz funkcję, która pobiera liczbę i zwraca ją skonwertowaną na string

// TODO: 2. Napisz funkcję, która pobiera stringa i zwraca go skonwertowanego na number

/* TODO: 3. W poniższych zmiennych, doprecyzuj rozwinięcie dziesiętne. Nadpisz wartość zmiennych nową wartością.
    - var powerHorses = 233; do 3 liczb po przecinku
    - var score = 10.33344; do 2 liczb po przecinku */



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

//                                    JSON
// var cars = [{
//     manufacturer: 'Porsche',
//     model: '911',
//     price: 135000,
//     currency: 'USD',
//     wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
// },{
//     manufacturer: 'Nissan',
//     model: 'GT-R',
//     price: 80000,
//     currency: 'USD',
//     wiki:'http://en.wikipedia.org/wiki/Nissan_Gt-r',
// },{
//     manufacturer: 'BMW',
//     model: 'M3',
//     price: 60500,
//     currency: 'USD',
//     wiki:'http://en.wikipedia.org/wiki/Bmw_m3',
// },{
//     manufacturer: 'Audi',
//     model: 'S5',
//     price: 53000,
//     currency: 'USD',
//     wiki:'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
// },{
//     manufacturer: 'Audi',
//     model: 'TT',
//     price: 40000,
//     currency: 'USD',
//     wiki:'http://en.wikipedia.org/wiki/Audi_TT',
// }];

/*
/*
  1. a:Napisz metode która zapisuje cars do localStorage
     b:Napisz metode ktora pobiera cars z localStorage
*/
/*
function saveToLocalStorage(carsToSave) {
  var carsString = JSON.stringify(carsToSave);
  localStorage.setItem('cars', carsString);
}

function fetchFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

saveToLocalStorage(cars);
var fetchCars = fetchFromLocalStorage('cars');
console.log(fetchCars);

// 2. Dodaj metode która przed zapisywaniem będzie usuwała samochody z cena < 60000
function filteringCarsByPrice(price) {
  var filtredCars = [];
  for(var i = 0; i < cars.length; i++) {
    if(cars[i].price > price) {
      filtredCars.push(cars[i]);
    }
  }

  return filtredCars;
}

function filterAndSaveCars() {
  var filtredCars = filteringCarsByPrice(60000);
  saveToLocalStorage(filtredCars);
}
filterAndSaveCars();
var exchangeRateUSDPLN = 3.7;
// 3. Dodaj metode która po pobraniu zamieni cene na złotowki
function fetchAndCalculatePolishZloty() {
  var fetchedCars1 = fetchFromLocalStorage('cars');
  for(var i = 0; i < fetchedCars1.length; i++) {
    fetchedCars1[i].price = fetchedCars1[i].price * exchangeRateUSDPLN;
  }
}
fetchAndCalculatePolishZloty();
// 4. Dodaj metode która po pobraniu sprawdzi czy znajduje sie samochod o wartosci 666
//  jesli tak to usunie dane z localStorage
function clearLSIf666() {
  var fetchedCars1 = fetchFromLocalStorage('cars');
  for(var i = 0; i < fetchedCars1.length; i++) {
    if(fetchedCars1[i].price === 666) {
      localStorage.clear();
    }
  }
}
clearLSIf666();
*/