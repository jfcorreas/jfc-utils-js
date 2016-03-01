var expect = require("chai").expect;
var utils = require("../modules/utils.js");

describe("Test utils module", function() {
  it("Should check if an object is really empty", function() {
    expect(utils.isEmpty({objeto: "lleno"})).to.be.false;
    expect(utils.isEmpty({})).to.be.true;
    expect(utils.isEmpty(new Date())).to.be.false;
  });
});
