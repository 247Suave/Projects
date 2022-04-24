//Grab a couple things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 10;

//Link Text

playerLivesCount.textContent = playerLives;

//generate data

const getData = () => [
    {imgSrc:'./images/50.jpg', name:'50 Cent'},
    {imgSrc:'./images/cench.png', name:'Cench'},
    {imgSrc:'./images/Dave.jpg', name:'Dave'},
    {imgSrc:'./images/Durk.jpg', name:'Durk'},
    {imgSrc:'./images/lil-baby.jpg', name:'Baby'},
    {imgSrc:'./images/polo.jpg', name:'Polo'},
    {imgSrc:'./images/sheffG.jpg', name:'Sheff'},
    {imgSrc:'./images/fredo.jpg', name:'Fredo'},
    {imgSrc:'./images/50.jpg', name:'50 Cent'},
    {imgSrc:'./images/cench.png', name:'Cench'},
    {imgSrc:'./images/Dave.jpg', name:'Dave'},
    {imgSrc:'./images/Durk.jpg', name:'Durk'},
    {imgSrc:'./images/lil-baby.jpg', name:'Baby'},
    {imgSrc:'./images/polo.jpg', name:'Polo'},
    {imgSrc:'./images/sheffG.jpg', name:'Sheff'},
    {imgSrc:'./images/fredo.jpg', name:'Fredo'},
    
    ];

    //This will randomize the cards

    const randomize = () =>{
        const cardData = getData();
        cardData.sort(() => Math.random() - 0.5) ;
        console.log(cardData);
        return cardData;
    };

    //Card Generator Function
    const cardGenerator = () => {
        const cardData = randomize();
        //Generate the HTML
cardData.forEach((item ) => {
    const card = document.createElement('div'); 
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //Attach the info to the cards
    face.src= item.imgSrc;
 card.setAttribute('name', item.name);
    //Attach card to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
    })
    
});
    };
    //Check Cards
    const checkCards = (e) => {
        const clickedCard = e.target;
        clickedCard.classList.add('flipped');
        const flippedCards = document.querySelectorAll('.flipped');
        const toggleCard = document.querySelectorAll('.toggleCard');
       console.log(flippedCards);
       //Logic
    if(flippedCards.length===2){
        if(
            flippedCards[0].getAttribute('name')===
            flippedCards[1].getAttribute('name')
            ){
                console.log('match');
                flippedCards.forEach ((card) => {
                    card.classList.remove('flipped') ;
                    card.style.pointerEvents = 'none';
            }); }else{
                console.log ('wrong');
                flippedCards.forEach ((card )=> {
                   card.classList.remove('flipped') ;
                   setTimeout(()=> card.classList.remove('toggleCard'),1000);
                });
                playerLives--;
                playerLivesCount.textContent=playerLives;
                if(playerLives===0){
                    restart('Try Again Bozo');
                }
            }
        
    }
    //Run a check to see if you won the game.
    if(toggleCard,length === 16){
        restart('You Won');
    }
    };

    //Restart
const restart = (text) => {
    let cardData= randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        //Randomize
       setTimeout(() => {
        cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        section.style.pointerEvents = 'all';
       },1000);

    });
    playerLives = 16;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert (text),100)
};




    cardGenerator();