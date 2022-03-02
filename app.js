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
        name: 'snek',
        img: 'images/snakeicon-1.png'
    },
]

cardArray.sort(() => 0.5 - Math.random()) //shuffles array randomly
console.log(cardArray)