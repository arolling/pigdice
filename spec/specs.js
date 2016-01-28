describe("Player",function() {
  it("will create a player object for Dave", function() {
    var testPlayer = new Player ("Dave");
    expect(testPlayer.bank).to.equal(0);
    expect(testPlayer.turnTotal).to.equal(0);
    expect(testPlayer.playerName).to.equal("Dave");
  });
});

describe("roll",function() {
  it("will randomly roll a standard die", function() {
    var rolldie = roll();
    console.log(rolldie);
    expect(rolldie).to.be.within(1,6);
  })
})
