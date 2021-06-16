const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { expect } = require("chai");
const {
  db,
  models: { Address },
} = require("../../index");
const seed = require("../../../../script/seed");

describe("Address Model", () => {
  let addresses;
  beforeEach(async () => {
    addresses = (await seed()).addresses;
  });

  describe("Basic Fields: addressLine, city, & country", () => {
    describe("addressLine", () => {
      it("should be a string", () => {
        expect(addresses.cody.addressLine).to.equal("2108  Hanifan Lane");
      });
    });
  });
});
