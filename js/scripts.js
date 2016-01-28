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
//  END BUSINESS LOGIC

$(document).ready(function() {
  var player1;
  var player2;

  $('form#name1input').submit(function(event) {
    event.preventDefault();
    player1 = new Player($('input#player1name').val());
    $('form#name1input').hide();
    $('#displayname1').html(player1.playerName);
  });

  $('form#name2input').submit(function(event) {
    event.preventDefault();
    player2 = new Player($('input#player2name').val());
    $('form#name2input').hide();
    $('#displayname2').html(player2.playerName);
    console.log(player1,player2);
  });


});
