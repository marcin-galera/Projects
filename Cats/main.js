
var cont = document.getElementById('container');
var emojiC = document.querySelector('p')

cont.classList.add('fontSize');


// cont.addEventListener('click', myFunction);
// function myFunction() {
//     emojiC.classList.add('emojiClass');
//     emojiC .innerText = emoji[(Math.random()*(3-0)).toFixed()];
// }

emoji = ['🙈', '🙉', '🙊', '🙉'];




    

function monkey() {
    emojiC.classList.remove('display');
    emojiC.classList.add('emojiClass');
    emojiC .innerText = emoji[(Math.random()*(3-0)).toFixed()];
    setTimeout( function() {
        emojiC.classList.add('display');
    }, 4000 ) ;
}

