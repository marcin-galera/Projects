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