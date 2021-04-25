document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'clothes',
            img: 'img/clothes.png'
        },
        {
            name: 'airquotes',
            img: 'img/airquotes.png'
        },
        {
            name: 'nap',
            img: 'img/nap.png'
        },
        {
            name: 'myeyes',
            img: 'img/myeyes.png'
        },
        {
            name: 'seven',
            img: 'img/seven.png'
        },
        {
            name: 'unagi',
            img: 'img/unagi.png'
        },
        {
            name: 'clothes',
            img: 'img/clothes.png'
        },
        {
            name: 'airquotes',
            img: 'img/airquotes.png'
        },
        {
            name: 'nap',
            img: 'img/nap.png'
        },
        {
            name: 'myeyes',
            img: 'img/myeyes.png'
        },
        {
            name: 'seven',
            img: 'img/seven.png'
        },
        {
            name: 'unagi',
            img: 'img/unagi.png'
        }
    ]

    const grid = document.querySelector('.grid')
    const score = document.querySelectorAll('.score')
    
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var player = 'result1'
    
    //create your board
     function createBoard(){
        if (grid.hasChildNodes()){
            grid.innerHTML = ''
            score[0].textContent = '0'
            score[1].textContent = '0'
        } 
        cardArray.sort(() => 0.5 - Math.random())
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/question.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        }

     //check for matches
     function checkForMatch() {
         var cards = document.querySelectorAll('img')
         const optionOneId = cardsChosenId[0]
         const optionTwoId = cardsChosenId[1]
         if (cardsChosen[0] === cardsChosen[1]) {
             alert('¡Encontraste dos iguales!')
            cardsWon.push(cardsChosen[0])
            resultDisplay = document.querySelector('#'+player)
            resultDisplay.textContent = parseInt(resultDisplay.textContent) + 1
         } else {
             cards[optionOneId].setAttribute('src', 'img/question.png')
             cards[optionTwoId].setAttribute('src', 'img/question.png')
             alert('Volvé a intentar')
         }
         cardsChosen = []
         cardsChosenId = []
         if (cardsWon.length === cardArray.length/2){
             if (parseInt(resultDisplay.textContent) > 3) {
                 alert('Ganaste')
             } else if (parseInt(resultDisplay.textContent) == 3) {
                 alert('Empataron')
             } else {
                 alert('Perdiste')
             }
         }
         if (player == 'result1') {
             player = 'result2'
         } else {
             player = 'result1'
         }

     }

     //flip your card
     function flipCard() {
         var cardId = this.getAttribute('data-id')
         var cardName = cardArray[cardId].name
         if (cardsChosenId.includes(cardId)) {
             return ''
         } else if (cardsWon.includes(cardName)) {
             return ''
         } else {
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosenId.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
     }

     createBoard()
     btnReset = document.getElementById('btn'),
     btnReset.addEventListener('click', createBoard)
})