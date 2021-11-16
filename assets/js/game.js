var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = " Roborto ";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

// function to start game
var startGame = function (){
    // reset players stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyName.length; i++) {
        if (playerHealth > 0 ){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = [i];

            enemyHealth = Math.floor(Math.random() * 21) + 40;

            fight(pickedEnemyName);
        }
        
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
};

// function to end the entire game 
var endGame = function () {
// if player is still alive, player wins!
if (playerHealth > 0 ){
    window.alert("The game has now ended. Lets see how you did");
}
    else{
        window.alert("You've lost your robot in battle.")
    }
    var playAgainConfirm = window.confirm("Would you like to play agin?");
if (playAgainConfirm){
    // restart the game
    startGame();
}
else {
    window.alert("Thank you for playing robot Gladiators! Come back soon!")
}
}




var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Alert players they are starting the round
    window.alert("Welcome to robot Gladiators!")

    // if player choses to fight, then fight
   if (promptFight === "fight" || promptFight === "FIGHT"){
    // remove enemy's health by subtracting the amount set in playerAttack variable    
    enemyHealth = Math.max(0, enemyHealth - playerAttack);
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
    );
   
    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " had died! ");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining. ")
    }
    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = Math.max(0, playerHealth - playerAttack);
        console.log(
        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
        );

    // check player's health 
    if (playerHealth <= 0){
        window.alert(playerName + " has died! ");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    } 
} else if (promptFight === "skip" || promptFight === "SKIP"){
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney -10);
    }
    else {
        fight();
    }
}

   

};

fight();
startGame();