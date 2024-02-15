let randNo = parseInt(Math.floor(Math.random()*100+1))

const submit = document.getElementById("subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.querySelector("p")

let prevGuess = []
let numOfGuess = 1

let playGame = true

if (playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log('hi');
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1 || guess > 100){
        alert('Please enter in the range of 1-100')
    }
    else{
        prevGuess.push(guess)
        if(numOfGuess == 10){
            displayGuess(guess)
            displayMessage(`You have exceeded number of attempts :( Correct number is: ${randNo}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randNo){
        displayMessage(`You guessed it right! Number was ${randNo}`)
        endGame()
    }
    else if(guess < randNo){
        displayMessage("Your guess is lower than the number")
    }
    else if(guess > randNo){
        displayMessage("Your guess is higher than the number")
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numOfGuess++
    remaining.innerHTML = `${10-numOfGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', (e)=>{
        randNo = parseInt(Math.floor(Math.random()*100+1))
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame =true
    })
   
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
