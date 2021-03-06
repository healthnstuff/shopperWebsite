const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { expect } = require("chai");
const {
  db,
  models: { Category },
} = require("../../index");
const seed = require("../../../../script/seed");

describe("Category model", () => {
  let categories;
  beforeEach(async () => {
    categories = (await seed()).categories;
  });
  console.log(categories);

  describe("Basic Fields: name", () => {
    describe("name", () => {
      it("is a string", async () => {
        const category = await Category.create({ name: "Test Category" });
        expect(category.name).to.equal(
          "Test Category",
          "Was not able to create a category with name Essential Oils"
        );
      });
    });
  });
});
