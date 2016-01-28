describe("Player",function() {
  it("will create a player object for Dave", function() {
    var testPlayer = new Player ("Dave");
    expect(testPlayer.bank).to.equal(0);
    expect(testPlayer.turnTotal).to.equal(0);
    expect(testPlayer.playerName).to.equal("Dave");
  });

  it("will add turn total to bank", function() {
    var testPlayer = new Player ("Dave");
    console.log(testPlayer);
    scoreKeeping(3, testPlayer);
    scoreKeeping(3, testPlayer);
    testPlayer.bankTurn();
    expect(testPlayer.bank).to.equal(6);
    expect(testPlayer.turnTotal).to.equal(0);
  });

  it("will win the game if the bank is equal to or greater than 100", function() {
    var testPlayer = new Player ("Dave");
    scoreKeeping(101, testPlayer);
    expect(testPlayer.bankTurn()).to.equal(true);
  });
});

describe("roll",function() {
  it("will randomly roll a standard die", function() {
    var rolldie = roll();
    console.log(rolldie);
    expect(rolldie).to.be.within(1,6);
  });
});

describe("scoreKeeping",function() {
  it ("will return false if die is rolled 1", function() {
    var testPlayer = new Player ("Dave");
    expect(scoreKeeping(1, testPlayer)).to.equal(false);
  });
  it ("will add the amount of die roll to the turn total", function() {
    var testPlayer = new Player ("Dave");
    scoreKeeping(3, testPlayer);
    expect(testPlayer.turnTotal).to.equal(3);
  });
});
