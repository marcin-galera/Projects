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