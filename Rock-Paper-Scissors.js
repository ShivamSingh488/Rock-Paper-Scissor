score=JSON.parse(localStorage.getItem('score'))||{
            win:0,
            loss:0,
            draw:0
        }
       
        function playGame(playerChoice) {
            let ran = Math.random();
            let computerChoice;
             
            if (ran > 0 && ran <= 1/3) {
                computerChoice = '👊';
            } else if (ran > 1/3 && ran <= 2/3) {
                computerChoice = '🤚';
            } else {
                computerChoice = '✌️';
            }

            if (playerChoice === computerChoice) {
                score.draw+=1;
                document.querySelector('.result').innerHTML='tie!'
                document.querySelector('.js-button').innerHTML=`You both chose ${playerChoice}.`
            } else if (
                (playerChoice === '👊' && computerChoice === '✌️') ||
                (playerChoice === '🤚' && computerChoice === '👊') ||
                (playerChoice === '✌️' && computerChoice === '🤚')
            ) {
                score.win+=1;
              document.querySelector('.result').innerHTML='You win!'
              document.querySelector('.js-button').innerHTML=`You chose ${playerChoice}.Computer chose ${computerChoice}.`
            } else {
                score.loss+=1;
               document.querySelector('.result').innerHTML='You lose'
               document.querySelector('.js-button').innerHTML=`You chose ${playerChoice}. Computer chose ${computerChoice}.`
            }
            localStorage.setItem('score',JSON.stringify(score))
            document.querySelector('.score1').innerHTML=`win:${score.win},loss:${score.loss},draw:${score.draw}`
           
        }
        function reset(){
            document.querySelector('.score1').innerHTML=`win:${score.win=0},loss:${score.loss=0},draw:${score.draw=0}`;
            document.querySelector('.result').innerHTML='';
            document.querySelector('.js-button').innerHTML='';
        }
