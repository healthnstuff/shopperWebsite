const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { expect } = require("chai");
const {
  db,
  models: { UserPayment },
} = require("../../index");
const jwt = require("jsonwebtoken");
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

  describe("instanceMethods", () => {
    describe("generateToken", () => {
      it("returns a token with the id of the userPayment", async () => {
        const token = await payments.cody.generateToken();
        const { id } = await jwt.verify(token, process.env.JWT);
        expect(id).to.equal(payments.cody.id);
      });
    });
    describe("authenticate", () => {
      let payment;
      beforeEach(
        async () =>
          (payment = await UserPayment.create({
            cardNum: "2930392758491728",
            expirationDate: new Date(2024, 2, 17),
            provider: "Bank of America",
            cvv: "290",
          }))
      );
      describe("with correct credentials", () => {
        it("returns a token", async () => {
          const token = await UserPayment.authenticate({
            cardNum: "2930392758491728",
            expirationDate: new Date(2024, 2, 17),
            provider: "Bank of America",
            cvv: "290",
          });
          expect(token).to.be.ok;
        });
      });
      describe("with incorrect credentials", () => {
        it("throws a 401", async () => {
          try {
            await UserPayment.authenticate({
              cardNum: "1203927584911728",
              expirationDate: new Date(2024, 2, 17),
              provider: "Bank of America",
              cvv: "290",
            });
          } catch (ex) {
            expect(ex.status).to.equal(401);
          }
        });
      });
    });
  });
});
