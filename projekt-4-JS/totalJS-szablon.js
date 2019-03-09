// TODO: 1. Podepnij ten plik do pliku index.html

// TODO: 2. Zadeklaruj 2 zmienne typu string
//     var a = "aaa";
//     var b = "bbb";

// TODO: 3. Zadeklaruj 2 zmienne typu number
//     var c = 3;
//     var d = 4;

// TODO: 4. Zadeklaruj 2 zmienne typu boolean
//     c = true;
//     f = false;
//     e = true;

// TODO: 5. Zadeklaruj zmienna typu undefined
//     var job;

// TODO: 6. Zadeklaruj zmienna typu null
//     var zero = null;

// TODO: 7. Zadeklaruj tablicę zawierajacą zmienne typu string
//     var tablica = ["marcin", "piotrek", "paulina"];

// TODO: 8. Zadeklaruj tablicę zawierajacą zmienne różnego typu
//     var tablica2 = [1, 2, 3, 'marcin', 'piotrek'];

// TODO: 9. Zadeklaruj obiekt o nazwie person zawierajacy pola:
//     - firstName
//     - lastName
//     - age
//     - country
//     var person = ['firstName', 'lastName', 'age', 'country'];

// TODO: 10. Sprawdź typ co najmniej jeden zmiennej z poprzednich zadań
//     console.log(typeof person);
//     console.log( typeof c);
//     console.log( typeof d);
 
// TODO: 11. Nadpisz wartość dowolnej zmiennej zadeklarownej w poprzednim zadaniu
//     var c = "marcin";



// OBJECT & ARRAY - GETTING VALUES

// TODO: 1. Wyświetl w konsoli wartości elementów tablicy skills
//     var skills = [
//         'JavaScript', // 0
//         'HTML', // 1
//         'CSS' // 2
//         // 3
//         ];
//     console.log(skills);
  
// TODO: 2. Wyświetl w konsoli liczbę elementów w powyższej tablicy skills
//     console.log(skills.length);
 
// TODO: 3. Wyświetl w konsoli wartości pól name / year / isDamaged z obiektu car
//         var car = {
//             name: 'Mazda',
//             year: 1998,
//             isDamaged: true
//         };
//         console.log(car.name, car.year, car.isDamaged);
 
//TODO: 4. Do tablicy users, dopisz dwóch dodatkowych userów
//   var users = [
//       {login: 'John', password: 'h4x'},
//       {login: 'Johhny', password: 'lubie_placki'},
//   ];
// users.push({login: 'marcin', password: 'ddd'}, {login: 'piotrek', password: 'eee'});
// console.log(users);

// TODO 4.a) Wyświetl w konsoli login i password usera na indeksie "2" w tablicy users
// console.log(users[2]);

// TODO 4.b) Stwórz console.loga który dostaje stringa:
//    - "USER CREDENTIALS ARE: LOGIN_USERA : PASSWORD_USERA"
// for(i = 0; i < users.length; i++) {
//     console.log('USER CREDENTIALS ARE: ' + users[i].login + " : " + users[i].password);
// }


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
// console.log(developer.otherInfo.skills.frameworks);
  
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
//   console.log(developers[1].otherInfo.skills.frameworks);
 
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

// for( i = 0; i < workers.length; i++) {
//     console.log(workers[1].experience[i].company);
// }





//TODO.1 Napisz instrukcję IF  / ELSE, która:
// - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
// jeśli zmienna developer jest równa 'junior js dev'
// - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 
    // var developer = 'junior js dev';
    //     if( developer === 'junior js dev' ) {
    //         console.log( 'jestem junior dev' )
    //     } else {
    //         console.log( 'jednak nie junior dev' )
    //     }



// TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
//     - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
//     - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
//     - wyświetli console.log("czas na studia") jeśli Twój wiek jest <= 33 i > 18
//     - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 
    // var age = 70;
    //     if( age >= 67 ) {
    //         console.log( 'czas na emeryture' );
    //     } else if( age < 67 && age > 33 ) {
    //         console.log( 'sredni wiek' );
    //     } else if( age <= 33 && age > 18 ) {
    //         console.log( 'czas na studia' )
    //     } else if( age <=18 ) {
    //         console.log( 'hej mlodziaku' )
    //     }
        



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
    
// var isMember = true;
// var price = isMember ? '2.00$' : '10.00$';
// console.log(price);



// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy

//  var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];

// for( i=0; i < drinksNames.length; i++ ) {
//  console.log(drinksNames[i]);
// }


// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=

// var totalPrice = 0;
// var prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];


//   for( i = 0; i < prices.length; i++ ) {
//       totalPrice += prices[i];
//   }
//   console.log(totalPrice);




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

// for( i = 0; i < drinks.length; i++) {
//     totalPrice += drinks[i].price;
// }
//     console.log(totalPrice);

// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

    // for( i = 0; i < drinks.length; i++ ) {
    //     drinks[i].price = drinks[i].price.toFixed(0)
    // }
    // console.log(drinks)


// TODO.5. Za pomocą pętli, doklej jednostkę PLN do cen, zastosuj dekremenację!

    // for ( i = drinks.length -1; i >= 0; i-- ) {
    //     drinks[i].price += " PLN"
    // }
    // console.log(drinks)

// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces

    // for( i = 0; i < drinks.length; i++) {
    //     drinks[i].name = drinks[i].name.trim();
    // }
    // console.log(drinks)
    


// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *

    // for( i = 0; i < drinks.length; i++ ) {
    //     drinks[i].id = i+1;
    // }
    // console.log(drinks)

// TODO.8: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka
 

// var drinks = [
//   {name: '  Vodka', price: 19.99},
//   {name: 'Whisky  ', price: 40.00},
//   {name: 'Prosseco  ', price: 35.99},
//   {name: '  Beer', price: 3.20},
//   {name: '   Vine  ', price: 16.50},
//   {name: '  Gin  ', price: 23.30}
// ];

// var i = 0
// while ( i < drinks.length ) {
//   console.log(drinks[i].name + ' ' + drinks[i].price);
//   i++;
// }



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

  //   for( i = 0; i < drinks.length; i++ ) {
  //     if( drinks[i].price < 30 ) {
  //     console.log( drinks[i].name )
  //   }
  // }

  
  // TODO.2: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //  - cena jest wyższa niż 20 ale jednocześnie niższa lub równa 40 

  //  for ( i = 0; i < drinks.length; i++) {
  //    if( drinks[i].price > 20 && drinks[i].price <= 40 ){
  //      console.log(drinks[i].name)
  //    }
  //  }

  
  
  // TODO.3: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //  - nazwa ma więcej niż 4 litery

  //  for( i = 0; i < drinks.length; i++) {
  //    if( drinks[i].name.length > 4 ) {
  //      console.log( drinks[i].name );
  //    }
  //  }

  
  // TODO.4: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
  //  - nazwa zaczyna się na literkę "B" lub na literkę "V" 

  //  for( i = 0; i < drinks.length; i++) {
  //    if( drinks[i].name.charAt() === 'B' || drinks[i].name.charAt() === 'V' ) {
  //      console.log( drinks[i].name );
  //    }
  //  }



  
  // TODO.6: Za pomocą pętli, doklej do każdego drinka pole:
  //  - isExpensive: true jeśli cena jest wyższa niż 30
  //  - isExpensive: false jeśli cena jest niższa lub równa 30
  //  - oczekiwany, przykładowy efekt:
  //  { name: 'Bacardi', price: 35.50, isExpensive: true },
  //  { name: 'Vine', price: 16.50,  isExpensive: false }

//   for( i = 0; i < drinks.length; i++ ) {
//     if( drinks[i].price > 30 ) {
//     drinks[i].isExpensive = true;
//   } else {
//     drinks[i].isExpensive = false;
//   }
// }
// console.log(drinks)


// BETTER WAY

    // for( i = 0; i < drinks.length; i++ ) {
    //   drinks[i].isExpensive = drinks[i].price > 30;
    // }
    // console.log(drinks)
  
  //  TODO.7: Za pomocą pętli, wyświetl w konsoli nazwe drinka:
  //  - którego cena jest równa 50.20, a po wyświetleniu console.log przerwij natychmiast pętlę 

  //  for ( i = 0; i < drinks.length; i++) {
  //    if( drinks[i].price >= 40 ) {
  //      console.log( drinks[i].name);
  //      break;
  //    }
  //  }

  
  // TODO.8: Za pomocą pętli, wyświetl w konsoli następujacy tekst:
  //     - "Cena _NAME_ wynosi _PRICE_"
  //     - przeskocz powyższy console.log jeśli cena jest równa 3.20 lub 19.99
   

// for( i = 0; i < drinks.length; i++ ) {
//   if( drinks[i].price === 3.20 || drinks[i].price === 19.99 ) {
//     continue
//   } else
//   console.log( ' cena ' + drinks[i].name + ' wynosi ' + drinks[i].price)
// }





// var users = [
//   { login: 'Bon@yth', pin: 3410, password: 'w@4x@' },
//   { login: 'Aver@num', pin: 5511, password: 'qa@a@xx@x' },
//   { login: 'Ko@get', pin: "2220", password: '4@311' },
//   { login: 'Dra@co', pin: 8890, password: 'v@v@' },
//   { login: 'Rave@n', pin: "6551", password: 'an@ia15' },
//   { login: 'Spa@wn', pin: 1211, password: 'q@we@' }
// ];

// TODO: 1. Puść pętlę po tablicy users. Sprawdź czy pin jest liczbą, jeśli nie to przerób go na liczbę
// for (var i = 0; i < users.length; i++) {
//   if (typeof users[i].pin !== "number") {
//       users[i].pin = parseInt(users[i].pin)
//   }
// }
// TODO: 2. Puść pętlę po tablicy users. Dodaj dynamicznie do obiektów pole isPasswordOK,
// które ma mieć wartość true jeśli password jest dłuższy niż 5 liter, a jak nie to false
// for (var i = 0; i < users.length; i++) {
//   if (users[i].password.length > 5) {
//       users[i].isPasswordOK = true
//   } else {
//       users[i].isPasswordOK = false
//   }
// }
// TODO: 3. Puść pętlę po tablicy users. Usuń znak @ z każdego loginu.
// for (var i = 0; i < users.length; i++) {
//   users[i].login = users[i].login.replace("@", "")
// }
// TODO: 4. Puść pętlę po tablicy users. Usuń znak @ z każdego password.
// for (var i = 0; i < users.length; i++) {
//   for (var j = 0; j < users[i].password.length; j++) {
//       users[i].password = users[i].password.replace("@", "")
//   }
// }
// TODO: 5. Puść pęte po tablicy users. Wyświetl w konsoli login z parzystych rekordów tablicy.
// for (var i = 0; i < users.length; i++) {
//   if (i % 2 == 0) {
//       console.log(users[i].login + "  ---> PARZYSTY LOGIN!!!")
//   }
// }
// TODO: 6. Puść pęte po tablicy users. Wyświetl w konsoli login z nieparzystych rekordów tablicy.
// for (var i = 0; i < users.length; i++) {
//   if (i % 2 !== 0) {
//       console.log(users[i].login + "  ---> NIEPARZYSTY LOGIN!!!")
//   }
// }

// console.log(users)

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

// for (var i = 0; i < attractions.length; i++) {
//   for (var j = 0; j < attractions[i].length; j++) {
//       console.log(attractions[i][j])
//   }
// }



// var users = [
//   { login: 'Bon@yth', pin: 3410, password: 'w@4x@' },
//   { login: 'Aver@num', pin: 5511, password: 'qa@a@xx@x' },
//   { login: 'Ko@get', pin: "2220", password: '4@311' },
//   { login: 'Dra@co', pin: 8890, password: 'v@v@' },
//   { login: 'Rave@n', pin: "6551", password: 'an@ia15' },
//   { login: 'Spa@wn', pin: 1211, password: 'q@we@' }
// ];

// // TODO: 1. Puść pętlę po tablicy users. Sprawdź czy pin jest liczbą, jeśli nie to przerób go na liczbę
// for (var i = 0; i < users.length; i++) {
//   if (typeof users[i].pin !== "number") {
//       users[i].pin = parseInt(users[i].pin)
//   }
// }
// // TODO: 2. Puść pętlę po tablicy users. Dodaj dynamicznie do obiektów pole isPasswordOK,
// // które ma mieć wartość true jeśli password jest dłuższy niż 5 liter, a jak nie to false
// for (var i = 0; i < users.length; i++) {
//   if (users[i].password.length > 5) {
//       users[i].isPasswordOK = true
//   } else {
//       users[i].isPasswordOK = false
//   }
// }

// for( i = 0; i < users.length; i++) {
//   users[i].isPasswordOk = users[i].password.length > 5;
// }
// console.log(users)


// // TODO: 3. Puść pętlę po tablicy users. Usuń znak @ z każdego loginu.
// for (var i = 0; i < users.length; i++) {
//   users[i].login = users[i].login.replace("@", "")
// }
// // TODO: 4. Puść pętlę po tablicy users. Usuń znak @ z każdego password.
// for (var i = 0; i < users.length; i++) {
//   for (var j = 0; j < users[i].password.length; j++) {
//       users[i].password = users[i].password.replace("@", "")
//   }
// }
// // TODO: 5. Puść pęte po tablicy users. Wyświetl w konsoli login z parzystych rekordów tablicy.
// for (var i = 0; i < users.length; i++) {
//   if (i % 2 == 0) {
//       console.log(users[i].login + "  ---> PARZYSTY LOGIN!!!")
//   }
// }
// // TODO: 6. Puść pęte po tablicy users. Wyświetl w konsoli login z nieparzystych rekordów tablicy.
// for (var i = 0; i < users.length; i++) {
//   if (i % 2 !== 0) {
//       console.log(users[i].login + "  ---> NIEPARZYSTY LOGIN!!!")
//   }
// }

// console.log(users)

// // TODO: 7. Napisz funkcję, która przerobi zdanie "ala ma kota" na zdanie "Ala Ma Kota".
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




// TODO: 0. W jednym console.logu(2 parametry) wyswietl index jezyka 'English' i nazwe ostatniego jezyka z langs

// var langs = ['Polish', 'English', 'Spanish'];

//   console.log( langs.lastIndexOf('English'), langs.slice(-1));


// TODO: 1. Do tablicy users, dodaj nowego użytkownika na początku i na koncu tablicy

// var logins = [
//     {login: 'John', password: 'h4x'},
//     {login: 'Kajtek', password: 'lubie_placki'},
// ];

// logins.unshift({login: 'marcin', password: 'start'}, {login: 'piotrek', password: 'rrr'});

// logins.push({login: 'Paulina', password: 'end'});

// console.log(logins)



/* TODO: 2a. dodaj parametr isAvaiable do przedmiotw z kolekcji items jesli jest wyporzyczony przyjmuje wartosc false inaczej wartosc true
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

// for (i=0; i<items.length; i++){
//   if(rentedItemsIds.includes(items[i].id)){
//    items[i].isAvaiable = false;
//     }
//   else {
//    items[i].isAvaiable = true;
//   }}
// console.log(items)



// var i = 0;
// var rentedItems = [];

// for (i=0; i<items.length; i++){
//   if(items[i].isAvaiable===false){
    
//       rentedItems.push(items[i].name);
//     }
// }

// console.log(rentedItems);



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

// for( i = 0; i < users.length; i++ ) {
//   if(users[i].password === null) {
//     console.log(users[i])
//   }
// }

// for( i = 0; i < users.length; i++ ) {
//   if(users[i].password === null) {
//     console.log('Proszę ' + users[i].login + ' o uzupełnienie hasła')
//   }
// }

// for( i = 0; i < users.length; i++ ) {
//   if(users[i].password === null) {
//     users[i].password = 'nowehasloJohna';
//     console.log(users[i])
//   }
// }



// TODO: 4. Jesli login w users zaczyna się na A albo W wyciągnij tych użytkowników i stwórz osobną tablice z tymi użytkownikami

// var i = 0;
// var users2 = [];
// for (i=0; i<users.length; i++){
//     if(users[i].login.charAt(0) == 'A' || users[i].login.charAt(0) == 'W'){
//         users2.push(users[i].login);
//         console.log('Loginy zaczynające się na literę A lub W: ' + users[i].login);
//       }
// }
// console.log(users2);


// var persons = [
//   {login: 'Bartek', hobby: ['tenis', 'poker', 'footbal']},
//   {login: 'Kamil', hobby: ['pływanie', 'programowanie']},
//   {login: 'Agatka', hobby: ['poker', 'taniec']},  
// ]; 

// TODO: 5a Powtarzajace sie hobby u pary uzytkownikow wyswietl w konsoli
//       5b Wyswietl w konsoli "Hobby NAZWA_HOBBY jest wspoldzielone przez UZYTKOWNIK i UZYTKOWNIK "


// var persons = [
//   { login: 'Bartek', hobby: ['tenis', 'poker', 'footbal'] },
//   { login: 'Kamil', hobby: ['pływanie', 'programowanie'] },
//   { login: 'Agatka', hobby: ['poker', 'taniec'] },
// ];
// //5a/b
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