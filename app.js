const cardArray = [
    {
        name: 'snek',
        img: 'images/snakeicon-1.png'
    },
    {
        name: 'tortle',
        img: 'images/turtleicon-1.png'
    },
    {
        name: 'gator/croc',
        img: 'images/gatorcrocicon-1.png'
    },
    {
        name: 'lizard',
        img: 'images/lizardicon-1.png'
    },
    {
        name: 'dangernoodle',
        img: 'images/snakeicon-1.png'
    },
    {
        name: 'snek',
        img: 'images/snakeicon-1.png'
    },
    {
        name: 'tortle',
        img: 'images/turtleicon-1.png'
    },
    {
        name: 'gator/croc',
        img: 'images/gatorcrocicon-1.png'
    },
    {
        name: 'lizard',
        img: 'images/lizardicon-1.png'
    },
    {
        name: 'dangernoodle',
        img: 'images/snakeicon-1.png'
    },
]

cardArray.sort(() => 0.5 - Math.random()) //shuffles array randomly

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let score = 0



function createBoard() { // creates lizard-skin grid
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/reptile-skin-texture.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}
createBoard()

function checkMatch() { //checks for card matches
    
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    const cards = document.querySelectorAll('img')
    console.log('check for a card match.')
    if (optionOneId == optionTwoId){
        alert('You have clicked the same image! Your current score is:'+ ' ' + score)
    }
    if (cardsChosen[0] == cardsChosen[1]){
        score++;
        alert('Hooray a match! Your current score is:'+ ' ' + score)
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/reptile-skin-texture.png')
        cards[optionTwoId].setAttribute('src', 'images/reptile-skin-texture.png')
        alert('Sorry try again! Your current score is:'+ ' ' + score)
    }
    cardsChosen = [] // resets game
    cardsChosenIds = []

    if (cardsWon.length ==cardArray.length/2){
        alert('You got them all! Hooray!')
    }
}

function flipCard() { // flips the cards
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2){
        setTimeout( checkMatch, 500)


    }
}
