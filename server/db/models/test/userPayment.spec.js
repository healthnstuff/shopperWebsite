const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { expect } = require("chai");
const {
  db,
  models: { UserPayment },
} = require("../../index");
const seed = require("../../../../script/seed");

describe("Payment Model", () => {
  let payments;
  beforeEach(async () => {
    payments = (await seed()).payments;
  });
  describe("provider", () => {
    it("should be a string", () => {
      expect(payments.cody.provider).to.equal("Bank of America");
    });
    it("cannot be null", async () => {
      await expect(UserPayment.create({})).to.be.rejected;
    });
  });

  describe("cardNum", () => {
    it("should be an integer", () => {
      expect(payments.cody.cardNum).to.equal("2930392758491728");
    });
  });
});
