let gameBoard = ["","","","","","","","",""];
let playerTurn = "X";



function formGenerator() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('gameStartDiv');
    
    const formDiv = document.createElement('div');
    formDiv.classList.add('gameStartBox', 'glowBox');
    
    const formHeader = document.createElement('h2');
    formHeader.textContent = 'ready to play?';
    formDiv.appendChild(formHeader);
    
    const playerInfo = document.createElement('p');
    playerInfo.classList.add('playerInformation');
    playerInfo.textContent = 'Please enter your names below';
    formDiv.appendChild(playerInfo);

    const playerForm = document.createElement('form');
    const playerOneLabel = document.createElement('label');
    playerOneLabel.setAttribute("for", "playerOne");
    playerOneLabel.classList.add("playerInformation");
    playerOneLabel.textContent = 'Player X';
    const playerOneInput = document.createElement('input');
    playerOneInput.setAttribute("type", "text");
    playerOneInput.setAttribute("placeholder", "player one");
    playerOneInput.setAttribute("autocomplete", "off");
    playerOneInput.setAttribute("max-length", "15");
    playerOneInput.setAttribute("id", "playerOne");
    playerOneInput.setAttribute("required","");
    playerForm.appendChild(playerOneLabel);
    playerForm.appendChild(playerOneInput);
    formDiv.appendChild(playerForm)

    const playerTwoLabel = document.createElement('label');
    playerTwoLabel.setAttribute("for", "playerOne");
    playerTwoLabel.classList.add("playerInformation");
    playerTwoLabel.textContent = 'Player O';
    const playerTwoInput = document.createElement('input');
    playerTwoInput.setAttribute("type", "text");
    playerTwoInput.setAttribute("placeholder", "player two");
    playerTwoInput.setAttribute("autocomplete", "off");
    playerTwoInput.setAttribute("max-length", "15");
    playerTwoInput.setAttribute("id", "playerTwo");
    playerTwoInput.setAttribute("required","");
    playerForm.appendChild(playerTwoLabel);
    playerForm.appendChild(playerTwoInput);
    formDiv.appendChild(playerForm);

    const formButton = document.createElement('button');
    formButton.classList.add("largeBtn");
    formButton.setAttribute("type", "submit");
    formButton.setAttribute("id", "submitBtn");
    formButton.textContent = "START";
    formDiv.appendChild(formButton);
    formButton.addEventListener('click', (e)=> {
        e.preventDefault();
        submitButton();
    });
    document.addEventListener('keypress', (event) => {
        if(event.key == "Enter") {submitButton()}
    })

    containerDiv.appendChild(formDiv);
    document.body.appendChild(containerDiv);
}


// formGenerator();
function gameBoardFunc(gameBoard, playerTurn){
    const container = document.createElement('div');
    container.classList.add('gameStartDiv');
    document.body.appendChild(container);
    
    const gameBoardDiv = document.createElement('div');
    gameBoardDiv.classList.add("gameBoard", "glowBox");
    container.appendChild(gameBoardDiv);

    for (let i = 1; i <= gameBoard.length; i++) {
        const div = document.createElement('div');
        div.id = `div${i}`;
        div.className = 'gameDiv';
        gameBoardDiv.appendChild(div);

        div.addEventListener('click', () => {
            gameBoard[i] = playerTurn;
            div.textContent = `${playerTurn}`;
        })
    }
}
function submitButton() {
    const playerInputOne = document.getElementById('playerOne');
    const playerInputTwo = document.getElementById('playerTwo');
        if (playerInputOne.value == "" || playerInputTwo.value == "") {
            alert ("Please enter your names")
        } else {
        document.body.innerHTML = `<div class="headerDiv"><h1 class="mainHeader glowBox">TIC TAC TOE</h1></div>`;
        gameBoardFunc(gameBoard, playerTurn);
        }
}
    formGenerator()