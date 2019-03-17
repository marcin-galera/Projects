
var cont = document.getElementById('container');
// var emojiC = document.querySelector('p')

cont.classList.add('fontSize');


// cont.addEventListener('click', myFunction);
// function myFunction() {
//     emojiC.classList.add('emojiClass');
//     emojiC .innerText = emoji[(Math.random()*(3-0)).toFixed()];
// }

emoji = ['🙈', '🙉', '🙊', '🙉'];




    

function monkey() {
    // emojiC.classList.remove('display');


    const monkeyElement = document.createElement("p");
    

    monkeyElement.classList.add('emojiClass');
    monkeyElement.innerText = emoji[(Math.random()*(3-0)).toFixed()];
    document.querySelector("#container").appendChild(monkeyElement);
    
    setTimeout( function() {
        monkeyElement.classList.add('display');
    }, 4000 ) ;
}

