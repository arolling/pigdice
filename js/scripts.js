function Player(firstName) {
  this.playerName = firstName;
  this.turnTotal = 0;
  this.bank = 0;
}
 var roll = function() {
   return Math.floor(Math.random() * 6 + 1);
 }
