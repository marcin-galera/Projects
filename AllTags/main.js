// Numbers

Math.round(7.5);
Math.floor(7.8);
Math.ceil(7, 3); // zaokrąglenie w górę
Math.max(7, 10, 3, 4)
Math.PI // 3,14
isNaN("43") // true
    !isNaN("43") // false



// Strings
var myString = "Marcin, wuut, Developer";

myString.length;
myString.toUpperCase();
myString.toLowerCase();
myString.indexOf('wuut') // zwraca liczbę o jeden mniejszą od pozycji 'w', ewentualnie '-1' jeśli nie ma wyrazu
myString.slice(2, 9) // wycina od 2 do 9 indexu
myString.slice(2) // wycina od 2 do końca
myString.split(',') // dzieli wyrazy na array po przecinku



// Array
var myArray = [2, 4, 1]

myArray.sort() // układa od najmniejszej do najwiekszej
myArray.reverse() // od największej do najmniejszej



// Date
var myBirthday = new Date(1995, 2, 18, 11, 30, 30);

myBirthday.getMonth() // ( 0 - 11)
myBirthday.getFullYear() // (YYYY)
myBirthday.getDate() // ( 1 - 31 )
myBirthday.getDay() // ( 0 - 6 ) from sunday 
myBirthday.getHours() // ( 0 - 23 )
myBirthday.getTime() // in MS


// DOM

document.getElementsByClassName('content');
var id = document.getElementById('id');
id.innerHTML = "text";
id.textContent = "newString";
id.getAttribute = ('id'); // wydoba nazwę id
id.setAttribute = ('class', 'pie'); // value and key;
id.setAttribute = ('style', 'left: 10px');
id.style.top = ('20px');
id.className; // wyswietla nazwe klasy
id.className = 'ninja';
id.addClass('test') // jquery
id.removeClass('test') // jquery
id.fadeOut() // znika jquery
id.fedeIn() // pojawia sie jquery
var newLi = document.createElement('li');
var menu = document.getElementById('id').getElementsByTagName('ul')[0];
menu.appendChild(newLi);
menu.insertBefore(newLi, menu[0]) // nie trzeba tutaj pisac [0] bo jest wyzej
menu.removeChild(newLi)
title.onclick = "alert('click me')"; // IN HTML
title.onmouseover = function () {}
title.className = 'open' // dodaje klase open
title.innerHTML = 'show less'
window.onload = function () {}
setTimeout(nameOfFunction, timeToShow)
var myTimer = setInterval(changeColor, 3000)
clearInterval(myTimer)
title.onfocus = function () {} // nakladanie focus ( np. border )
title.onblur = function () {} // ściąganie focus