const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { expect } = require("chai");
const {
  db,
  models: { Product },
} = require("../../index");
const jwt = require("jsonwebtoken");
const seed = require("../../../../script/seed");

describe("Product model", () => {
  let products;
  beforeEach(async () => {
    products = (await seed()).products;
  });

  describe("Basic Fields: name, description, price, inventory & imageURL", () => {
        describe("name", () => {
            it("is a string", () => {
                expect(products.product1.name).to.equal(
                "Nature's Truth Lemongrass",
                "Was not able to create a product with name Nature's Truth Lemongrass"
                );
            });

            it("cannot be null", async () => {
                await expect(
                Product.create({}),
                "We shouldn't be able to create a product with no name"
                ).to.be.rejected;
            });

            it("cannot be an empty string", async () => {
                await expect(
                Product.create({
                    name: "",
                }),
                "we shouldn't be able to create a product with an empty string name"
                ).to.be.rejected;
            });
        });

        describe("description", () => {
            it("is a text", () => {
                expect(products.product1.description).to.equal(
                "Nature's Truth 100% Pure Lemongrass Essential Oil, 0.51 Fluid Ounce",
                "Was not able to create a product with description Nature's Truth 100% Pure Lemongrass Essential Oil, 0.51 Fluid Ounce"
                );
                });
            });

        describe("price", () => {
            it("is a float", () => {
            expect(products.product1.price).to.equal(
                6.99,
                "Was not able to create a product with price 6.99"
            );
            });

            it("should not be null", async () => {
            await expect(
                Product.create({}),
                "we shouldn't be able to create a product with no price"
            ).to.be.rejected;
            });
        });

        describe("inventory", () => {
            it("should be an integer", () => {
            expect(products.product1.inventory).to.equal(20);
            });

            it("should not be null", async () => {
                await expect(
                    Product.create({}),
                    "we shouldn't be able to create a product with no inventory"
                ).to.be.rejected;
            });
        })
        describe("imageURL", () => {
            it("is a string", () => {
                expect(products.product1.imageUrl).to.equal(
                "https://images-na.ssl-images-amazon.com/images/I/414m7O5-FmL._AC_.jpg",
                "Was not able to create a product with imageUrl https://images-na.ssl-images-amazon.com/images/I/414m7O5-FmL._AC_.jpg"
                );
            });
        })
    });
});
