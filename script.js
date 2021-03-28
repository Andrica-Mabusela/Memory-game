// Variables
let gameWrapper = document.querySelector('#game-wrapper')
let themeSelector = document.querySelector('#select-theme select')
let frontImages = document.querySelectorAll('#game-wrapper .flip-card-front img')
let backImagesWrappers = document.querySelectorAll('.flip-card-back')
let backImages 
let currentArray
let selectedSix
let matchedCards = []

let onlyObjects

let cards = document.querySelectorAll('.flip-card')


// Theme Arrays

let familyGuyArray = [
    [
        {
            classname: 'bonnie',
            image: 'images/family Guy/bonnie.png'
        },

        {
            classname: 'bonnie',
            image: 'images/family Guy/bonnie.png'
        }
    ],


    [
        {
            classname: 'brian',
            image: 'images/family Guy/brian.png'
        },

        {
            classname: 'brian',
            image: 'images/family Guy/brian.png'
        }
    ],


    [
        {
            classname: 'carter',
            image: 'images/family Guy/carter.jpeg'
        },

        {
            classname: 'carter',
            image: 'images/family Guy/carter.jpeg'
        }
    ],



    [
        {
            classname: 'chris',
            image: 'images/family Guy/chris.png'
        },

        {
            classname: 'chris',
            image: 'images/family Guy/chris.png'
        }
    ],


    [
        {
            classname: 'cleveland',
            image: 'images/family Guy/cleveland.jpg'
        },

        {
            classname: 'cleveland',
            image: 'images/family Guy/cleveland.jpg'
        }
    ],


    [
        {
            classname: 'glenn',
            image: 'images/family Guy/glenn.jpeg'
        },

        {
            classname: 'glenn',
            image: 'images/family Guy/glenn.jpeg'
        }
    ],


    [
        {
            classname: 'herbet',
            image: 'images/family Guy/herbet.jpeg'
        },

        {
            classname: 'herbet',
            image: 'images/family Guy/herbet.jpeg'
        }
    ],


    [
        {
            classname: 'joe',
            image: 'images/family Guy/joe.jpeg'
        },

        {
            classname: 'joe',
            image: 'images/family Guy/joe.jpeg'
        }
    ],



    [
        {
            classname: 'lois',
            image: 'images/family Guy/lois.png'
        },

        {
            classname: 'lois',
            image: 'images/family Guy/lois.png'
        }
    ],


    [
        {
            classname: 'mayor_west',
            image: 'images/family Guy/mayor_west.jpeg'
        },

        {
            classname: 'mayor_west',
            image: 'images/family Guy/mayor_west.jpeg'
        }
    ],


    [
        {
            classname: 'meg',
            image: 'images/family Guy/meg.png'
        },

        {
            classname: 'meg',
            image: 'images/family Guy/meg.png'
        }
    ],


    [
        {
            classname: 'peter',
            image: 'images/family Guy/peter.png'
        },

        {
            classname: 'peter',
            image: 'images/family Guy/peter.png'
        }
    ],




    [
        {
            classname: 'stewie',
            image: 'images/family Guy/stewie.png'
        },

        {
            classname: 'stewie',
            image: 'images/family Guy/stewie.png'
        }
    ],



    [
        {
            classname: 'tom',
            image: 'images/family Guy/tom.jpeg'
        },

        {
            classname: 'tom',
            image: 'images/family Guy/tom.jpeg'
        }
    ],



    [
        {
            classname: 'trisha',
            image: 'images/family Guy/trisha.jpeg'
        },

        {
            classname: 'trisha',
            image: 'images/family Guy/trisha.jpeg'
        }
    ]


]
// End of familyGuyArray



// Marvel Comics Array
let marvelComicsArray = [

    [

        {
            classname: 'ant-man',
            image: 'images/Marvel Comics/ant_man.jpeg'
        },

        {
            classname: 'ant-man',
            image: 'images/Marvel Comics/ant_man.jpeg'
        }
    ],


    [

        {
            classname: 'black-panther',
            image: 'images/Marvel Comics/black_panther.jpeg'
        },

        {
            classname: 'black-panther',
            image: 'images/Marvel Comics/black_panther.jpeg'
        }
    ],


    [

        {
            classname: 'black-widow',
            image: 'images/Marvel Comics/black_widow.jpeg'
        },

        {
            classname: 'black-widow',
            image: 'images/Marvel Comics/black_widow.jpeg'
        }
    ],


    [

        {
            classname: 'cap',
            image: 'images/Marvel Comics/cap.jpeg'
        },

        {
            classname: 'cap',
            image: 'images/Marvel Comics/cap.jpeg'
        }
    ],


    [

        {
            classname: 'captain-marvel',
            image: 'images/Marvel Comics/captain_marvel.jpeg'
        },

        {
            classname: 'captain-marvel',
            image: 'images/Marvel Comics/captain_marvel.jpeg'
        }
    ],




    [

        {
            classname: 'deadpool',
            image: 'images/Marvel Comics/deadpool.jpeg'
        },

        {
            classname: 'deadpool',
            image: 'images/Marvel Comics/deadpool.jpeg'
        }
    ],



    [

        {
            classname: 'doctor-strange',
            image: 'images/Marvel Comics/doctor_strange.jpeg'
        },

        {
            classname: 'doctor-strange',
            image: 'images/Marvel Comics/doctor_strange.jpeg'
        }
    ],


    [

        {
            classname: 'drax',
            image: 'images/Marvel Comics/drax.jpeg'
        },

        {
            classname: 'drax',
            image: 'images/Marvel Comics/drax.jpeg'
        }
    ],



    [

        {
            classname: 'falcon',
            image: 'images/Marvel Comics/falcon.png'
        },

        {
            classname: 'falcon',
            image: 'images/Marvel Comics/falcon.png'
        }
    ],



    [

        {
            classname: 'gamora',
            image: 'images/Marvel Comics/gamora.jpeg'
        },

        {
            classname: 'gamora',
            image: 'images/Marvel Comics/gamora.jpeg'
        }
    ],



    [

        {
            classname: 'groot2',
            image: 'images/Marvel Comics/groot2.jpeg'
        },

        {
            classname: 'groot2',
            image: 'images/Marvel Comics/groot2.jpeg'
        }
    ],
   


    [

        {
            classname: 'hawkeye',
            image: 'images/Marvel Comics/hawkeye.jpeg'
        },

        {
            classname: 'hawkeye',
            image: 'images/Marvel Comics/hawkeye.jpeg'
        }
    ],


    [

        {
            classname: 'hela',
            image: 'images/Marvel Comics/hela.jpeg'
        },

        {
            classname: 'hela',
            image: 'images/Marvel Comics/hela.jpeg'
        }
    ],



    [

        {
            classname: 'hulk',
            image: 'images/Marvel Comics/hulk.jpeg'
        },

        {
            classname: 'hulk',
            image: 'images/Marvel Comics/hulk.jpeg'
        }
    ],


    [

        {
            classname: 'iron-man',
            image: 'images/Marvel Comics/iron_man.jpeg'
        },

        {
            classname: 'iron-man',
            image: 'images/Marvel Comics/iron_man.jpeg'
        }
    ],


    [

        {
            classname: 'loki',
            image: 'images/Marvel Comics/loki.jpeg'
        },

        {
            classname: 'loki',
            image: 'images/Marvel Comics/loki.jpeg'
        }
    ],


    [

        {
            classname: 'mantis',
            image: 'images/Marvel Comics/mantis.jpeg'
        },

        {
            classname: 'mantis',
            image: 'images/Marvel Comics/mantis.jpeg'
        }
    ],


    [

        {
            classname: 'nebula',
            image: 'images/Marvel Comics/nebula.jpeg'
        },

        {
            classname: 'nebula',
            image: 'images/Marvel Comics/nebula.jpeg'
        }
    ],



    [

        {
            classname: 'odin',
            image: 'images/Marvel Comics/odin.jpeg'
        },

        {
            classname: 'odin',
            image: 'images/Marvel Comics/odin.jpeg'
        }
    ],


    [

        {
            classname: 'rocket',
            image: 'images/Marvel Comics/rocket.jpg'
        },

        {
            classname: 'rocket',
            image: 'images/Marvel Comics/rocket.jpg'
        }
    ],


    [

        {
            classname: 'shuri',
            image: 'images/Marvel Comics/shuri.jpeg'
        },

        {
            classname: 'shuri',
            image: 'images/Marvel Comics/shuri.jpeg'
        }
    ],


    [

        {
            classname: 'spiderman',
            image: 'images/Marvel Comics/spiderman.jpeg'
        },

        {
            classname: 'spiderman',
            image: 'images/Marvel Comics/spiderman.jpeg'
        }
    ],




    [

        {
            classname: 'star-lord',
            image: 'images/Marvel Comics/star_lord.jpeg'
        },

        {
            classname: 'star-lord',
            image: 'images/Marvel Comics/star_lord.jpeg'
        }
    ],



    [

        {
            classname: 'thanos',
            image: 'images/Marvel Comics/thanos.jpeg'
        },

        {
            classname: 'thanos',
            image: 'images/Marvel Comics/thanos.jpeg'
        }
    ],



    [

        {
            classname: 'thor',
            image: 'images/Marvel Comics/thor.jpeg'
        },

        {
            classname: 'thor',
            image: 'images/Marvel Comics/thor.jpeg'
        }
    ],



    [

        {
            classname: 'wanda',
            image: 'images/Marvel Comics/wanda.jpeg'
        },

        {
            classname: 'wanda',
            image: 'images/Marvel Comics/wanda.jpeg'
        }
    ],



    [

        {
            classname: 'war-machine',
            image: 'images/Marvel Comics/war_machine.jpeg'
        },

        {
            classname: 'war-machine',
            image: 'images/Marvel Comics/war_machine.jpeg'
        }
    ],


    [

        {
            classname: 'wasp',
            image: 'images/Marvel Comics/wasp.jpeg'
        },

        {
            classname: 'wasp',
            image: 'images/Marvel Comics/wasp.jpeg'
        }
    ],


    [

        {
            classname: 'winter-soldier',
            image: 'images/Marvel Comics/winter_soldier.jpeg'
        },

        {
            classname: 'winter-soldier',
            image: 'images/Marvel Comics/winter_soldier.jpeg'
        }
    ]



]



//WWE Array
let wweArray = [

    [
        {
            classname: 'adam-cole',
            image: 'images/WWE/adam_cole.jpeg'
        },

        {
            classname: 'adam-cole',
            image: 'images/WWE/adam_cole.jpeg'
        }

    ],


    [
        {
            classname: 'aj-styles',
            image: 'images/WWE/aj_styles.jpeg'
        },

        {
            classname: 'aj-styles',
            image: 'images/WWE/aj_styles.jpeg'
        }

    ],


    [
        {
            classname: 'bayley',
            image: 'images/WWE/bayley.jpeg'
        },

        {
            classname: 'bayley',
            image: 'images/WWE/bayley.jpeg'
        }

    ],


    [
        {
            classname: 'becky-lynch',
            image: 'images/WWE/becky_lynch.jpeg'
        },

        {
            classname: 'becky-lynch',
            image: 'images/WWE/becky_lynch.jpeg'
        }

    ],



    [
        {
            classname: 'braun-strowman',
            image: 'images/WWE/braun_strowman.jpeg'
        },

        {
            classname: 'braun-strowman',
            image: 'images/WWE/braun_strowman.jpeg'
        }

    ],



    [
        {
            classname: 'brock-lesnar',
            image: 'images/WWE/brock_lesnar.jpeg'
        },

        {
            classname: 'brock-lesnar',
            image: 'images/WWE/brock_lesnar.jpeg'
        }

    ],


    [
        {
            classname: 'charlotte-flair',
            image: 'images/WWE/charlotte_flair.jpeg'
        },

        {
            classname: 'charlotte-flair',
            image: 'images/WWE/charlotte_flair.jpeg'
        }

    ],


    [
        {
            classname: 'daniel-bryan',
            image: 'images/WWE/daniel_bryan.jpeg'
        },

        {
            classname: 'daniel-bryan',
            image: 'images/WWE/daniel_bryan.jpeg'
        }

    ],



    [
        {
            classname: 'dolph-zigler',
            image: 'images/WWE/dolph_zigler.jpeg'
        },

        {
            classname: 'dolph-zigler',
            image: 'images/WWE/dolph_zigler.jpeg'
        }

    ],



    [
        {
            classname: 'drew-mcintyre',
            image: 'images/WWE/drew_mcintyre.jpeg'
        },

        {
            classname: 'drew-mcintyre',
            image: 'images/WWE/drew_mcintyre.jpeg'
        }

    ],



    [
        {
            classname: 'finn-balor',
            image: 'images/WWE/finn_balor.jpeg'
        },

        {
            classname: 'finn-balor',
            image: 'images/WWE/finn_balor.jpeg'
        }

    ],


    [
        {
            classname: 'goldberg',
            image: 'images/WWE/goldberg.jpeg'
        },

        {
            classname: 'goldberg',
            image: 'images/WWE/goldberg.jpeg'
        }

    ],



    [
        {
            classname: 'the-rock',
            image: 'images/WWE/the_rock.png'
        },

        {
            classname: 'the-rock',
            image: 'images/WWE/the_rock.png'
        }

    ],



    [
        {
            classname: 'randy-orton',
            image: 'images/WWE/randy_orton.png'
        },

        {
            classname: 'randy-orton',
            image: 'images/WWE/randy_orton.png'
        }

    ],



    
    [
        {
            classname: 'john-cena',
            image: 'images/WWE/john_cena.jpeg'
        },

        {
            classname: 'john-cena',
            image: 'images/WWE/john_cena.jpeg'
        }

    ],



    [
        {
            classname: 'johnny-gargano',
            image: 'images/WWE/johnny_gargano.jpeg'
        },

        {
            classname: 'johnny-gargano',
            image: 'images/WWE/johnny_gargano.jpeg'
        }

    ],
    


    [
        {
            classname: 'roman-reigns',
            image: 'images/WWE/roman_reigns.jpeg'
        },

        {
            classname: 'roman-reigns',
            image: 'images/WWE/roman_reigns.jpeg'
        }

    ],



    [
        {
            classname: 'sasha-banks',
            image: 'images/WWE/sasha_banks.jpeg'
        },

        {
            classname: 'sasha-banks',
            image: 'images/WWE/sasha_banks.jpeg'
        }

    ],




    [
        {
            classname: 'seth-rollins',
            image: 'images/WWE/seth_rollins.jpeg'
        },

        {
            classname: 'seth-rollins',
            image: 'images/WWE/seth_rollins.jpeg'
        }

    ],



    [
        {
            classname: 'shawn-michaels',
            image: 'images/WWE/shawn_michaels.jpeg'
        },

        {
            classname: 'shawn-michaels',
            image: 'images/WWE/shawn_michaels.jpeg'
        }

    ],


    [
        {
            classname: 'the-fiend',
            image: 'images/WWE/the_fiend.jpeg'
        },

        {
            classname: 'the-fiend',
            image: 'images/WWE/the_fiend.jpeg'
        }

    ],



    [
        {
            classname: 'the-miz',
            image: 'images/WWE/the_miz.jpeg'
        },

        {
            classname: 'the-miz',
            image: 'images/WWE/the_miz.jpeg'
        }

    ],



    [
        {
            classname: 'the-undertaker',
            image: 'images/WWE/the_undertaker.jpeg'
        },

        {
            classname: 'the-undertaker',
            image: 'images/WWE/the_undertaker.jpeg'
        }

    ],



    [
        {
            classname: 'tomasso-ciampa',
            image: 'images/WWE/tomasso_ciampa.jpg'
        },

        {
            classname: 'tomasso-ciampa',
            image: 'images/WWE/tomasso_ciampa.jpg'
        }

    ],



    [
        {
            classname: 'triple-h',
            image: 'images/WWE/triple_h.jpeg'
        },

        {
            classname: 'triple-h',
            image: 'images/WWE/triple_h.jpeg'
        }

    ],






]











// listen for selected theme
themeSelector.addEventListener('change', event => {


    // selectedSix.forEach(item => {
    //     item.remove();
    //     let x = selectedSix.indexOf(item);
    //     selectedSix.splice(x, 1);
    // })

    backImages = document.querySelectorAll('#game-wrapper .flip-card-back img')


    if( themeSelector.value ){

        cards.forEach(card => {
            card.addEventListener('click', checkMatch)
        })

        // matchedCards.forEach(card => {
        //     card.classList.add('flip-back');
        //     card.classList.add('flip');
        //     card.parentElement.addEventListener('click', checkMatch)
        // })

    }
        
    if(themeSelector.value == 'Family Guy'){
        console.log('Family Guy')

        selectedSix = []
        onlyObjects = []

        console.log( backImages )

        currentArray = familyGuyArray.sort(() => Math.random() - 0.5 )
        console.log(currentArray)

        backImages.forEach(image => {
            image.remove()
        })

        frontImages.forEach(image => {
            image.setAttribute('src', 'images/family Guy/griffin_family1.jpg')
        })


    }else if(themeSelector.value == 'Marvel Comics' ){
        
        console.log('Marvel Comics')

        selectedSix = []
        onlyObjects = []

        console.log( backImages )

        currentArray = marvelComicsArray.sort(() => Math.random() - 0.5 )
        console.log(currentArray)  
        
        backImages.forEach(image => {
            image.remove()
        })

        frontImages.forEach(image => {
            image.setAttribute('src', 'images/Marvel Comics/logo.jpeg')
        })
        

    }else if(themeSelector.value == 'WWE' ){
        
        console.log('WWE')

        selectedSix = []
        onlyObjects = []

        console.log( backImages )

        currentArray = wweArray.sort(() => Math.random() - 0.5 )
        console.log(currentArray)

        backImages.forEach(image => {
            image.remove()
        })

        frontImages.forEach(image => {
            image.setAttribute('src', 'images/WWE/logo3.png')
        })

    }


    for(let i = 0; i < 6; i++){
        selectedSix.push( currentArray[i] )
    }

    selectedSix.forEach(item =>{
        onlyObjects.push( item[0] )
        onlyObjects.push( item[1] )
    })

    onlyObjects = onlyObjects.sort( () => Math.random() - 0.5 )
    
    for(let i = 0; i < backImagesWrappers.length; i++){

        for(let j = 0; j < onlyObjects.length; j++){
            let img = document.createElement('img')

            img.setAttribute('src', onlyObjects[i].image )
            img.setAttribute('class', onlyObjects[i].classname )

            
            backImagesWrappers[i].appendChild(img)
            break
        }
    }

    // console.log(selectedSix)
    

    

})
// end_______







let cardsEvaluated = []
let score = 0

function checkMatch(event){

    // flip the card
    let cardElement = event.target.parentElement.parentElement.parentElement;
    let x = event.target.parentElement.parentElement;
    if(cardElement.classList.contains('flip-card')){
  
        x.classList.add('flip')
    }

    // console.log(event.target)

    console.log(event.target.parentElement)

    // Check if the cards Match
    let y = event.target.parentElement.parentElement


    if( cardsEvaluated.length == 1 ){

        if( event.target.getAttribute('id') != p ){
            cardsEvaluated.push(y)
        }else{
            console.log('cannot add the same card')
        }

    }else if(cardsEvaluated.length == 0){
        var p = event.target.getAttribute('id')
        cardsEvaluated.push(y)
    }



        


    if( cardsEvaluated.length == 2 ){

        setTimeout( () => {

            let cardBackImage1 = cardsEvaluated[0].querySelector('.flip-card-back img')
            let cardBackImage2 = cardsEvaluated[1].querySelector('.flip-card-back img')
            
            let cardBackImage1Class = cardBackImage1.getAttribute('class')
            let cardBackImage2Class = cardBackImage2.getAttribute('class')
     
            if( cardBackImage1Class == cardBackImage2Class ){
                console.log('They match')

                 cardBackImage1.setAttribute('src', 'images/family Guy/white.png')
                 cardBackImage2.setAttribute('src', 'images/family Guy/white.png')
                
                 matchedCards.push(cardsEvaluated[0]);
                 matchedCards.push(cardsEvaluated[1]);

                 console.log(matchedCards);

                cardsEvaluated[0].parentElement.removeEventListener('click', checkMatch)
                cardsEvaluated[1].parentElement.removeEventListener('click', checkMatch)
                
                score++

            }else{

                    cardsEvaluated[0].classList.add('flip-back')
                    cardsEvaluated[1].classList.add('flip-back')

                    cardsEvaluated[0].classList.remove('flip')
                    cardsEvaluated[0].classList.remove('flip-back')

                    cardsEvaluated[1].classList.remove('flip')
                    cardsEvaluated[1].classList.remove('flip-back')
               

                console.log('They do not match')
            }
             
            
            cardsEvaluated = []

            if( score == 6 ){
                document.querySelector('#overlay').style.display = 'block'
                document.querySelector('#winner-box').style.display = 'flex'
            }


        } ,500)

      
    }


}



// play again function 
function playAgain(){
    location.reload()
}