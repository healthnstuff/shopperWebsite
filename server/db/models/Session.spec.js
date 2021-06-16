const { expect } = require("chai");
const {
  db,
  models: { Session },
} = require("../index");

describe("Session model", () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });

  describe("Basic Fields: total", () => {
    it("total is of type decimal", async () => {
      const session = await Session.create({ total: 53.5 });
      expect(session.total).to.equal(53.5);
    });

    it("default value is 0", async () => {
        const session = await Session.create({});
        expect(session.total).to.equal(0);
    });
  });
});
