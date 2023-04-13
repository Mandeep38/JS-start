// let pass = []; // this is the password that we are suppose to return to the user
// steps to create the password
let smallcharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let BIGCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let Symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "()", "(", ")", "<", ">", "?", "/", "_", "-", "'", "\"", ";", ":", ",", ".", "`", "~", "{}", "{", "}", "[", "]", "|", "+", "="]
let Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

function randomizer() {
    let pass = [];
    for (let i = 0; i < 12; i++) {
        let randompick = Math.floor(Math.random() * 4)
        let randomarr = [smallcharacters, BIGCharacters, Symbols, Numbers][randompick]
        let randomzzz = randomarr[Math.floor(Math.random() * randomarr.length)];
        pass.push(randomzzz)
    }
    let passELEM = document.querySelector('.password')
    passELEM.innerText = pass.join("");
    return pass.join("")
}
// document.getElementsByClassName('CHANGEpassword').innerText = randomizer()
let x = randomizer()
console.log(x)


