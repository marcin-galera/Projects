// TODO: 1. Podepnij ten plik do pliku index.html
// TODO: 2. Zadeklaruj 2 zmienne typu string
// TODO: 3. Zadeklaruj 2 zmienne typu number
// TODO: 4. Zadeklaruj 2 zmienne typu boolean
// TODO: 5. Zadeklaruj zmienna typu undefined
// TODO: 6. Zadeklaruj zmienna typu null
// TODO: 7. Zadeklaruj tablicę zawierajacą zmienne typu string
// TODO: 8. Zadeklaruj tablicę zawierajacą zmienne różnego typu
// TODO: 9. Zadeklaruj obiekt o nazwie person zawierajacy pola:
//  - firstName
//  - lastName
//  - age
//  - country
// TODO: 10. Sprawdź typ co najmniej jeden zmiennej z poprzednich zadań
// TODO: 11. Nadpisz wartość dowolnej zmiennej zadeklarownej w poprzednim zadaniu

/*====================================================
 OBJECT & ARRAY - GETTING VALUES
 ====================================================*/
// TODO: 1. Wyświetl w konsoli wartości elementów tablicy skills
  // TODO: 2. Wyświetl w konsoli liczbę elementów w powyższej tablicy skills
  // TODO: 3. Wyświetl w konsoli wartości pól name / year / isDamaged z obiektu car
  // TODO: 4. Do tablicy users, dopisz dwóch dodatkowych userów
  // TODO 4.a) Wyświetl w konsoli login i password usera na indeksie "2" w tablicy users
 //console.log(users[2]);
  /* TODO 4.b) Stwórz console.loga który dostaje stringa:
co
   - "USER CREDENTIALS ARE: LOGIN_USERA : PASSWORD_USERA" */

  // TODO: 5. Wyśwetl w konsoli tablicę z frameworkami developera
  var developer = {
      name: 'John Doe',
      city: 'Gdansk',
      otherInfo: {
          skills: {
              frameworks: ['Angular', 'React', 'Vue'],
              tools: ['Webstorm', 'Gulp', 'GIT']
          }
      }
  };

  //console.log(developer.otherInfo.skills.frameworks)
  // TODO: 6. Wyśwetl w konsoli tablicę z frameworkami drugiego developera
  var developers = [
      {
          name: 'John Doe',
          otherInfo: {
              skills: {
                  frameworks: ['Angular', 'React', 'Vue'],
                  tools: ['Webstorm', 'Gulp', 'GIT']
              }
          }
      },
      {
          name: 'John Doe',
          otherInfo: {
              skills: {
                  frameworks: ['Angulassr', 'React', 'Vue'],
                  tools: ['Webstorm', 'Gulp', 'GIT']
              }
          }
      }
  ];
  console.log(developers[1].otherInfo.skills.frameworks)
  // TODO: 7. Wyświetl w konsoli kolejno wszystkie firmy w jakich pracował drugi pracownik tablicy workers
  var workers = [
      {
          name: 'John',
          experience: [
              { years: '1998-2004', company: 'Google' },
              { years: '2004-2011', company: 'Microsoft' },
              { years: '2012-2015', company: 'Facebook' }
          ]
      },
      {
          name: 'Samanta',
          experience: [
              { years: '1998-2008', company: 'Infoshare' },
              { years: '2010-2014', company: 'Amazon' },
              { years: '2014-2017', company: 'Intel' }
          ]
      }
  ];

  console.log(workers[1].experience[0].company + " " + workers[1].experience[1].company + " " + workers[1].experience[2].company);
  //console.log(workers[1].experience.map(function(item){
  //return item.company;
//}));
/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */

var developer = 'junior js dev';

if(developer === 'junior js dev') {
    console.log('jestem junior dev');
} else {
    console.log('jednak nie junior dev');
}
    



/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("czas na studia") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */
var age = "d";

if(age >= 67) {
    console.log('czas na emeryture')
} else if(age <67 && age >33) {
    console.log('sredni wiek')
} else if(age <=33 && age > 18) {
    console.log('czas na studia')
} else if(age <= 18 && age > 0) {
    console.log('hej mlodziaku')
} else {
    console.log('nieprawdiwlwa')
}


/* TODO.3: Napisz instrukcje, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 */

var skill = 'javaScript';

var check = skill === 'javaScript' || skill === "HTML" || skill === "CSS";
console.log(check);

/* TODO.4: Wykorzystując SWITCH, napisz instrukcje, która jako parametr przyjmuje stringa o nazwie day i:
 - która wyrzuca w konsoli wymyślony tekst, w zależności czy "case" jest spełniony
 - case mają odpowiadać kolejnym dniom: "Monday", "Tuesday", "Wednesday" etc...
 - ma być parę przynajmniej przypadków (np. Monday, Tuesday, Saturday)
 - w przypadku jeśli case nie pasuje do żadnego przypadku, to funkcja ma wyświetlić w konsoli tekst: "Taki dzień nie istnieje!";
 */

switch('moddday') {
    case 'monday':
        console.log('jest poniedzialek');
        break;
    case 'Thursday':
    console.log('jest wtorek');
        break;
    default:
    console.log('poddaje sie');
}



/* TODO.5: Wykorzystując TERNARY OPERATOR:
    - przypisz do zmiennej price wartość: '2.00$' jeśli isMember = true a jeśli nie to '10.00$';
        czy
  */

  var price = '2.00$';
  console.log(price === '2.00$' ? true : '10.00$')
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
/*var price = 0
var totalPrice = 0;
var drinks = [
  {name: '  Vodka', price: 19.99},
  {name: 'Whisky  ', price: 40.00},
  {name: 'Prosseco  ', price: 35.99},
  {name: '  Beer', price: 3.20},
  {name: '   Vine  ', price: 16.50},
  {name: '  Gin  ', price: 23.30}
];*/
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
/*
for (i = drinks.length -1; i >= 0; i--) {
    console.log(drinks[i].price += " PLN");
}
*/
// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces
/*
for (i = 0; i < drinks.length; i++) {
    drinks[i].name = drinks[i].name.replace(/ /g,'')

}
  console.log(drinks)


  drinks[i].name = drinks[i].name.trim();
*/

// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *

/*for (i = 0; i < drinks.length; i) {
    drinks[i].id = ++i;
    
}
console.log(drinks)*/

// i++ / i = i +1
// i+1 / i + 1



/* TODO.8: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka
 */
/*
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

for ( i = 0; i < drinks.length; i++) {
  console.log(drinks[i].name.replace(/ /g,'') + ' ' + drinks[i].price + ' PLN')
}


var i = 0;
while(i< drinks.length) {
  console.log(drinks[i].name + ' ' + drinks[i].price);
  i++;
}


*/
/* Dana jest tablica drinks*/

var drinks = [
    {name: 'Vodka', price: 19.99},
    {name: 'Whisky', price: 40.00},
    {name: 'Prosseco', price: 35.99},
    {name: 'Beer', price: 3.20},
    {name: 'Balieys', price: 50.20},
    {name: 'Bacardi', price: 35.50},
    {name: 'Vine', price: 16.50},
    {name: 'Gin', price: 23.30}
  ];
  
  /* TODO.1: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
      - cena jest niższa 30.00 */
/*
      for (i = 0; i < drinks.length; i++)
          if(drinks[i].price < 30) {
              console.log(drinks[i].name)
          }
      */
  
  
  /* TODO.2: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
   - cena jest wyższa niż 20 ale jednocześnie niższa lub równa 40 */

   /* for ( i = 0; i < drinks.length; i++ )
          if(drinks[i].price > 20 && drinks[i].price <= 40){
              console.log(drinks[i].name)
          }*/
  
  /* TODO.3: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
   - nazwa ma więcej niż 4 litery */
/*
   for ( i = 0; i < drinks.length; i++) {
          if(drinks[i].name.length > 4) {
              console.log(drinks[i].name)
          }
        }
*/
  
  /* TODO.4: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
   - nazwa zaczyna się na literkę "B" lub na literkę "V" */
/*
   for ( i = 0; i < drinks.length; i++)
          if(drinks[i].name.charAt() === 'B' || drinks[i].name.charAt() == 'V' ){
              console.log(drinks[i].name)
          }

*/
  
  /* TODO.6: Za pomocą pętli, doklej do każdego drinka pole:
   - isExpensive: true jeśli cena jest wyższa niż 30
   - isExpensive: false jeśli cena jest niższa lub równa 30
   - oczekiwany, przykładowy efekt:
   { name: 'Bacardi', price: 35.50, isExpensive: true },
   { name: 'Vine', price: 16.50,  isExpensive: false } */

   /*
   for ( i = 0; i < drinks.length; i++) {
        drinks[i].isExpenssive = drinks[i].price > 30
   }
   console.log(drinks)
*/

/*
   for ( i = 0; i < drinks.length; i++)
          if(drinks[i].price > 30) {
              console.log(drinks[i].name + " " + drinks[i].price + " isExpensive: true")
          } else if(drinks[i].price <= 30) {
              console.log(drinks[i].name + " " + drinks[i].price + " isExpensive: false")
          }
         */ 


  
  /* TODO.7: Za pomocą pętli, wyświetl w konsoli nazwe drinka:
   - którego cena jest równa 50.20, a po wyświetleniu console.log przerwij natychmiast pętlę */
/*
   for ( i = 0; i < drinks.length; i++) {
       if(drinks[i].price == 50.20) {
       console.log(drinks[i].name);
       break;
   }
}
   */
  
  /* TODO.8: Za pomocą pętli, wyświetl w konsoli następujacy tekst:
      - "Cena _NAME_ wynosi _PRICE_"
      - przeskocz powyższy console.log jeśli cena jest równa 3.20 lub 19.99
   */

   /* for ( i = 0; i < drinks.length; i++) {
       if(drinks[i].price == 3.20 || drinks[i].price == 19.99) {
           continue;
       }
       console.log('cena ' + drinks[i].name + ' wynosi ' + drinks[i].price);
   }*/ 
   // TODO: 0. W jednym console.logu(2 parametry) wyswietl index jezyka 'English' i nazwe ostatniego jezyka z langs
/*var langs = ['Polish', 'English', 'Spanish'];
console.log(langs.indexOf('English'), langs.pop());
*/
// TODO: 1. Do tablicy users, dodaj nowego użytkownika na początku i na koncu tablicy
/*var logins = [
    {login: 'John', password: 'h4x'},
    {login: 'Kajtek', password: 'lubie_placki'},
];

logins.push({login: 'marcin', password: 'fff'});
logins.unshift({login: 'piotrek', password: 'dggg'});
console.log(logins);
*/
/* TODO: 2a. dodaj parametr isAvaiable do przedmiotw z kolekcji items jesli jest wypozyczony przyjmuje wartosc false inaczej wartosc true
        2b. stworz kolekcje rentedItems ktora bedzie zawierala przedmioty z isAvaiable===false od najnizszego id do najwyzeszego przy zalozeniu ze w kolekcji items elementy posiadaja rosnace wartosci id
*/        
var rentedItemsIds = [2, 5, 29, 32, 34];
var items = [
  {id: 1, name: 'Konewka'},
  {id: 2, name: 'Łopata'},
  {id: 3, name: 'Szlauf'},
  {id: 4, name: 'Grabki'},
  {id: 5, name: 'Doniczka1'},
  {id: 6, name: 'Sweter'},
  {id: 29, name: 'Krzesło'},
  {id: 32, name: 'Doniczka2'},
  {id: 38, name: 'Rura'}
];

/*for( i = 0; i < items.length; i++ ) {
    var isRented=rentedItemsIds.indexOf(items[i].id)
    
    if(isRented === -1) {
        items[i].isAvaiable = true;
    } else {
        items[i].isAvaiable = false;
    }
}
console.log(items);*/

for( i = 0; i < items.length; i++ ) {
    var isRented=rentedItemsIds.indexOf(items[i].id)

        items[i].isAvaiable = isRented === -1;
    
    
}
console.log(items);


/* TODO: 3a. Wyświtl obiekt użytkownika nieposiadającego hasła w konsoli
          3b Dla użytkownika nieposiadającego uzupełnionego hasła wyświetl w konsoli: "Proszę NAZWA_UZYTKOWNIKA o uzupełnienie hasła"
          3c Uzupełnij brakujące hasło w kolekcji users    
  */
 /*
var users = [
    {login: 'Bartek', password: 'Testtest'},
    {login: 'Kamil', password: 'Testtest12'},
    {login: 'Agatka', password: 'Agatka1'},
    {login: 'Anastazja', password: '12341234'},
    {login: 'Władzia', password: 'XjsdSASDsd'},
    {login: 'John', password: null},
    {login: 'Bartek', password: 'SdsSsadsad'},
    {login: 'Asia', password: 'lubie_placki'},
];

for (var i = 0; i < users.length; i++) {
    if(users.password === null)
}*/

// TODO: 4. Jesli login w users zaczyna się na A albo W wyciągnij tych użytkowników i stwórz osobną tablice z tymi użytkownikami
/*TODO: 5a Powtarzajace sie hobby u pary uzytkownikow wyswietl w konsoli
        5b Wyswietl w konsoli "Hobby NAZWA_HOBBY jest wspoldzielone przez UZYTKOWNIK i UZYTKOWNIK "
*/
var persons = [
    {login: 'Bartek', hobby: ['tenis', 'poker', 'footbal']},
    {login: 'Kamil', hobby: ['pływanie', 'programowanie']},
    {login: 'Agatka', hobby: ['poker', 'taniec']},  
]; 