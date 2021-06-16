/* global describe beforeEach it */

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { expect } = require("chai");
const {
  db,
  models: { User },
} = require("../../index");
const jwt = require("jsonwebtoken");
const seed = require("../../../../script/seed");

describe("User model", () => {
  let users;
  beforeEach(async () => {
    users = (await seed()).users;
  });

  describe("Basic Fields: firstName and lastName", () => {
    describe("firstName", () => {
      it("firstName is a string", () => {
        expect(users.cody.firstName).to.equal(
          "Cody",
          "Was not able to create a user with firstName Cody"
        );
      });

      it("firstName cannot be null", async () => {
        await expect(
          User.create({}),
          "We shouldn't be able to create a user with no firstName"
        ).to.be.rejected;
      });

      it("firstName cannot be an empty string", async () => {
        await expect(
          User.create({
            firstName: "",
          }),
          "we shouldn't be able to create a user with an empty string firstName"
        ).to.be.rejected;
      });
    });

    describe("lastName", () => {
      it("lastName is a string", () => {
        expect(users.cody.lastName).to.equal(
          "Martin",
          "Was not able to create a user with lastName Martin"
        );
      });

      it("lastName cannot be null", async () => {
        await expect(
          User.create({}),
          "We shouldn't be able to create a user with no lastName"
        ).to.be.rejected;
      });

      it("lastName cannot be an empty string", async () => {
        await expect(
          User.create({
            lastName: "",
          }),
          "we shouldn't be able to create a user with an empty string lastName"
        ).to.be.rejected;
      });
    });
  });

  describe("Test Email", () => {
    it("email is a string", () => {
      expect(users.cody.email).to.equal(
        "cody@gmail.com",
        "Was not able to create a user with email cody@gmail.com"
      );
    });

    it("email should be unique", async () => {
      await expect(
        User.create({ email: "cody@gmail.com" }),
        "Shouldn't be able to create two users with the same email"
      ).to.be.rejected;
    });

    it("email should not be null", async () => {
      await expect(
        User.create({}),
        "we shouldn't be able to create a user with no email"
      ).to.be.rejected;
    });

    it("email should be in email format", async () => {
      await expect(User.create({ email: "fdjkls" })).to.be.rejected;
    });
  });

  describe("Test Phone Number", () => {
    it("phone number should be in a string", () => {
      expect(users.cody.phoneNum).to.equal("293 219 9906");
    });

    it("phone number should be unique", async () => {
      await expect(User.create({ phoneNum: "293 219 9906" })).to.be.rejected;
    });

    it("phone number should not be null", async () => {
      await expect(User.create({})).to.be.rejected;
    });
  });

  describe("testAdmin", () => {
    it("isAdmin should be false by default", () => {
      expect(users.cody.isAdmin).to.equal(false);
    });

    it("isAdmin should be true when specified", () => {
      expect(users.murphy.isAdmin).to.equal(true);
    });
  });

  describe("instanceMethods", () => {
    describe("generateToken", () => {
      it("returns a token with the id of the user", async () => {
        const token = await users.cody.generateToken();
        const { id } = await jwt.verify(token, process.env.JWT);
        expect(id).to.equal(users.cody.id);
      });
    }); // end describe('correctPassword')
    describe("authenticate", () => {
      let user;
      beforeEach(
        async () =>
          (user = await User.create({
            email: "lucy@gmail.com",
            password: "loo",
            firstName: "Lucy",
            lastName: "Liu",
            phoneNum: "253 808 0634",
          }))
      );
      describe("with correct credentials", () => {
        it("returns a token", async () => {
          const token = await User.authenticate({
            email: "lucy@gmail.com",
            password: "loo",
            firstName: "Lucy",
            lastName: "Liu",
            phoneNum: "253 808 0634",
          });
          expect(token).to.be.ok;
        });
      });
      describe("with incorrect credentials", () => {
        it("throws a 401", async () => {
          try {
            await User.authenticate({
              email: "lucydfs@gmail.com",
              password: "loo",
              firstName: "Lucy",
              lastName: "Liu",
              phoneNum: "253 808 0634",
            });
            throw "nooo";
          } catch (ex) {
            expect(ex.status).to.equal(401);
          }
        });
      });
    }); // end describe('authenticate')
  }); // end describe('instanceMethods')
}); // end describe('User model')
