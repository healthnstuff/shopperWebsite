const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const {
  db,
  models: { CartItem, Session },
} = require("../../index");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("CartItem model", () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });

  describe("Basic Fields: quantity", () => {
    it("quantity is of type integer", async () => {
      const cartItem = await CartItem.create({ quantity: 2 });
      expect(cartItem.quantity).to.equal(2);
    });

    it("quantity cannot be null", async () => {
      await expect(
        CartItem.create({}),
        "we should not be able to create a cart item with no quantity"
      ).to.be.rejected;
    });
  });

//   describe("Association Fields: foreign key", () => {
//     describe("sessionId", () => {
//       it("is not empty", async () => {
//           const session = await Session.create({ total: 36 });
//           const cartItem = await CartItem.create({ quantity: 3 });
//           await session.addCartItem(cartItem);
//           console.log(cartItem)
//           expect(cartItem.sessionId).to.equal(1);
//       })
//     });
//   });
});
