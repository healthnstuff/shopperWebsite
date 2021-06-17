/* global describe beforeEach it */

const {expect} = require('chai')
const { db, models: { OrderInfo, OrderItem} } = require('../../index');
// const seed = require('../../../script/seed');

describe('OrderItem model', () => {
  beforeEach(async () => {
    await db.sync({ force: true })
  })

  describe('Basic Fields: quantity', () => {
    describe('quantity', () => {
      it('is not empty', async () => {
        const item = await OrderItem.create({quantity: 2});
        expect(item.quantity).to.equal(2)
      });
    });
  });
  describe.skip('Association Fields: foreign keys', () => {
    describe('orderInfo_id', () => {
      it('is not empty', async () => {
        const item = await OrderItem.create({quantity: 2});
        const order = await OrderInfo.create({total: 20.17});
        console.log("orderItem", item)
        console.log("orderInfo", order)
        expect(order.addItem).to.be.a('function')
      })
    })
  })
});