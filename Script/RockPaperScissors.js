        const score = 
            JSON.parse(localStorage.getItem('score')) || 
            {Wins: 0, Ties: 0, Losses: 0};

        let computerMove = "";
        let playerMove = "";

        updateScoreElement();
        updateMoveElement();

        function playGame(playerSelection) {
            playerMove = playerSelection;
            computerMove = pickComputerMove();

            let result = '';

            if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'You Tie'
                } else if (computerMove === 'Paper') {
                    result = 'You Lose'
                } else if (computerMove === 'Scissors') {
                    result = 'You Win'
                }

            } else if (playerMove === 'Paper') {
                if (computerMove === 'Rock') {
                    result = 'You Win'
                } else if (computerMove === 'Paper') {
                    result = 'You Tie'
                } else if (computerMove === 'Scissors') {
                    result = 'You Lose'
                }
            } else if (playerMove === 'Scissors') {
                if (computerMove === 'Rock') {
                    result = 'You Lose'
                } else if (computerMove === 'Paper') {
                    result = 'You Win'
                } else if (computerMove === 'Scissors') {
                    result = 'You Tie'
                }
            };

            if (result === 'You Win') {
                score.Wins += 1;
            } else if (result === 'You Lose') {
                score.Losses += 1;
            } else if (result === 'You Tie') {
                score.Ties += 1;
            };

            localStorage.setItem('score',JSON.stringify(score));

            updateScoreElement();
            updateMoveElement();
            document.querySelector('.js-result').innerHTML=`${result}`;
        };



        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins ${score.Wins}, Ties ${score.Ties}, Losses ${score.Losses}`;
        };



        function pickComputerMove() {

            const generateMove = Math.random();

            let computerMove = "";

            if (generateMove > 0 && generateMove <= 1 / 3) {
                computerMove = "Rock"
            } else if (generateMove > 1 / 3 && generateMove <= 2 / 3) {
                computerMove = "Paper"
            } else {
                computerMove = "Scissors"
            };

            return computerMove;
        };
 
        function updateMoveElement() {if (!playerMove || !computerMove) return;
            document.querySelector('.js-moves').innerHTML = `
            You 
            <img class="score" src="Icons/${playerMove}.png"> 
            <img class="score" src="Icons/${computerMove}.png">
            Computer `;
        }