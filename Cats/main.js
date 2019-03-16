
var cont = document.getElementById('container');
cont.addEventListener('click', myFunction);
function myFunction() {
    cont.innerText = emoji[(Math.random()*(3-0)).toFixed()];
}

var emoji = ['🙈', '🙉', '🙊', '🙉']
cont.classList.add('fontSize')