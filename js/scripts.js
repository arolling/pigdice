function Player(firstName) {
  this.playerName = firstName;
  this.turnTotal = 0;
  this.bank = 0;
}

Player.prototype.bankTurn = function() {
  this.bank = this.turnTotal;
  this.turnTotal = 0;
  if(this.bank >= 100) {
    return true;
  }
}

 var roll = function() {
   return Math.floor(Math.random() * 6 + 1);
 }

var scoreKeeping = function(dieRoll, currentPlayer) {
    if (dieRoll === 1) {
      currentPlayer.turnTotal = 0;
      return false;
    } else {
      currentPlayer.turnTotal += dieRoll;
    }
}
