function Player(firstName) {
  this.playerName = firstName;
  this.turnTotal = 0;
  this.bank = 0;
}

Player.prototype.bankTurn = function() {
  this.bank += this.turnTotal;
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

  $('button#player1roll').click(function(){
    var dieRoll = roll();
    $('#currentdiceroll1').text(dieRoll);
    var pig = scoreKeeping(dieRoll, player1);
    if (pig === false) {
      alert("end of turn");
      $('#runningturntotal1').text(player1.turnTotal);
      $('#player1buttons').hide();
      $('#player2buttons').show();
    } else {
      $('#runningturntotal1').text(player1.turnTotal);
    }
  });

  $('button#player2roll').click(function(){
    var dieRoll = roll();
    $('#currentdiceroll2').text(dieRoll);
    var pig = scoreKeeping(dieRoll, player2);
    if (pig === false) {
      alert("end of turn");
      $('#runningturntotal2').text(player2.turnTotal);
      $('#player2buttons').hide();
      $('#player1buttons').show();
    } else {
      $('#runningturntotal2').text(player2.turnTotal);
    }
  });

  $('button#player1hold').click(function() {
    console.log(player1);
    var winning = player1.bankTurn();
    $('#bank1').text(player1.bank);
    if(winning === true) {
      alert('You Won');
    }
    $('#player1buttons').hide();
    $('#player2buttons').show();
  });

  $('button#player2hold').click(function() {
    console.log(player2);
    var winning = player2.bankTurn();
    $('#bank2').text(player2.bank);
    if(winning === true) {
      alert('You Won');
    }
    $('#player2buttons').hide();
    $('#player1buttons').show();
  });
});
