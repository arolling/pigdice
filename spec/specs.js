describe("Player",function() {
  it("will create a player object for Dave", function() {
    var testPlayer = new Player ("Dave");
    expect(testPlayer.bank).to.equal(0);
    expect(testPlayer.turnTotal).to.equal(0);
    expect(testPlayer.playerName).to.equal("Dave");
  });
});
