const game= ()=>{
    let pScore=0;
    let cScore=0;

//start the game
      const startGame=()=>{
          const playBtn=document.querySelector('.intro button');
          const introScreen=document.querySelector('.intro');
          const match = document.querySelector('.match');
        playBtn.addEventListener("click",()=>{
               introScreen.classList.add("fadeOut");
               match.classList.add("fadeIn");
        });
      };
      //playmatch
      const playMatch=()=>{
        const options= document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.player-hand');
       const computerHand=document.querySelector('.computer-hand');
       const hands=document.querySelectorAll('.hands img');
          hands.forEach(hand=>{
              hand.addEventListener('animationend',function(){
                  this.style.animation="";
              });
          });
       //computer generats random
       const computerOptions=['rock','paper', 'scissors']; 
       options.forEach(option=>{
            option.addEventListener('click',function(){
                //compute choice
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoice=computerOptions[computerNumber];
                //compare hands call
              setTimeout(()=>{
                compareHands(this.textContent,computerChoice);
                //update images
                playerHand.src=`./Assets/${this.textContent}.png`;
                computerHand.src=`./Assets/${computerChoice}.png`;
              },2000);
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";
            });
       });     
    };
       const updateScore=()=>{
           const playerScore=document.querySelector('.player-score p');
           const computerScore=document.querySelector('.computer-score p');
           playerScore.textContent=pScore;
           computerScore.textContent=cScore;
       };
    const compareHands=(playerChoice,computerChoice)=>{
        const winner=document.querySelector('.winner');
        if(playerChoice===computerChoice){
           winner.textContent="It is a tie";
        
           return;
        }
        if(playerChoice==='rock'){
            if(computerChoice==='scissors'){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                  winner.textContent="Computer wins";
                  cScore++;
                  updateScore();
                  return;
            }
        }
        //paper
        if(playerChoice==='scissors'){
            if(computerChoice==='rock'){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                  winner.textContent="Player wins";
                  pScore++;
                  updateScore();
                  return;
            }
        }
        if(playerChoice==='paper'){
            if(computerChoice==='scissors'){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                  winner.textContent="Player wins";
                  pScore++;
                  updateScore();
                  return;
            }
        }
    }

      startGame();
      playMatch();

};
game();