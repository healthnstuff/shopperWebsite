const { expect } = require("chai");
const request = require("supertest");
const {
  db,
  models: { OrderInfo, CartItem },
} = require("../../db");
const seed = require("../../../script/seed");
const app = require("../../app");

describe("OrderInfo routes", () => {
  beforeEach(async () => {
    await seed();
  });

  describe("/api/orderInfo", () => {
    it("GET /api/orderInfo", async () => {
      const res = await request(app).get("/api/orderInfo").expect(200);

      expect(res.body).to.be.an("array");
      expect(res.body.length).to.equal(50);
    });

    it("GET /api/orderInfo/:userId", async () => {
      const res = await request(app).get("/api/orderInfo/14").expect(200);

      expect(res.body).to.be.an("array");
      expect(res.body.length).to.equal(2);
    });

    it("POST /api/orderInfo", async () => {
      const res = await request(app).post("/api/orderInfo").expect(200);

      expect(res.body).to.be.an("object");
      expect(res.body.status).to.equal("open");
    });

    it("POST /api/orderInfo/:userId", async () => {
      const res = await request(app).post("/api/orderInfo/49").expect(200);

      expect(res.body).to.be.an("object");
      expect(res.body.userId).to.equal(49);
      expect(res.body.status).to.equal("open");
    });

    //this test has to change userId on each run
    // it("PUT /api/orderInfo/:userId", async () => {
    //   const res = await request(app).put("/api/orderInfo/5").expect(200);

    //   expect(res.body).to.be.an("object");
    //   expect(res.body.status).to.equal("closed");
    // });

    //this test has to change userId on each run
    // it("DELETE /api/orderInfo/:userId", async () => {
    //   const res = await request(app).delete("/api/orderInfo/19").expect(200);

    //   expect(res.body).to.be.an("object");
    // });
  });
});

describe("cart routes", () => {
  beforeEach(async () => {
    await seed();
  });

  describe("/api/orderInfo/cart", () => {
    it("GET /api/orderInfo/cart/:userId", async () => {
      const res = await request(app).get("/api/orderInfo/cart/40").expect(200);
    });
  });
});
