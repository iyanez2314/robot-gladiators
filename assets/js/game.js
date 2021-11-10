var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = " Roborto ";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Alert players they are starting the round
    window.alert("Welcome to robot Gladiators!")

    // if player choses to fight, then fight
   if (promptFight === "fight" || promptFight === "FIGHT"){
    // remove enemy's health by subtracting the amount set in playerAttack variable    
    enemyHealth = enemyHealth -playerAttack;
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
        playerHealth = playerHealth -enemyAttack;
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
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
}

   

};

fight();