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

  describe("Basic Fields: addressLine, city, country, & state", () => {
    describe("addressLine", () => {
      it("should be a string", () => {
        expect(addresses.cody.addressLine).to.equal("2108  Hanifan Lane");
      });
      it("cannot be null", async () => {
        await expect(Address.create({})).to.be.rejected;
      });
      it("cannot be an empty string", async () => {
        await expect(Address.create({ addressLine: "" })).to.be.rejected;
      });
    });
    describe("city", () => {
      it("should be a string", () => {
        expect(addresses.cody.city).to.equal("Roswell");
      });
      it("cannot be null", async () => {
        await expect(Address.create({})).to.be.rejected;
      });
      it("cannot be an empty string", async () => {
        await expect(Address.create({ city: "" })).to.be.rejected;
      });
    });
    describe("country", () => {
      it("should be a string", () => {
        expect(addresses.cody.country).to.equal("USA");
      });
      it("cannot be null", async () => {
        await expect(Address.create({})).to.be.rejected;
      });
      it("cannot be an empty string", async () => {
        await expect(Address.create({ country: "" })).to.be.rejected;
      });
    });
    describe("state", () => {
      it("should be a string", () => {
        expect(addresses.cody.state).to.equal("GA");
      });
      it("cannot be null", async () => {
        await expect(Address.create({})).to.be.rejected;
      });
      it("cannot be an empty string", async () => {
        await expect(Address.create({ state: "" })).to.be.rejected;
      });
    });
  });

  describe("Postal Code", () => {
    it("should be an integer", () => {
      expect(addresses.cody.postalCode).to.equal(30913);
      expect(addresses.cody.postalCode).to.be.a("number");
    });
    it("cannot be null", async () => {
      await expect(Address.create({})).to.be.rejected;
    });
  });
});
