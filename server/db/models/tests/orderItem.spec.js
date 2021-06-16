/* global describe beforeEach it */

const {expect} = require('chai')
const { db, models: { OrderInfo, OrderItem} } = require('../../index');
// const seed = require('../../../script/seed');

describe.only('OrderItem model', () => {
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
  describe('Association Fields: foreign keys', () => {
    describe('orderInfo_id', () => {
      it('is not empty', async () => {
        const item = await OrderItem.create({quantity: 2});
        const order = await OrderInfo.create({total: 20.17});
        await order.addOrderItem(item)
        console.log("orderItem", item)
        console.log("orderInfo", order)
        expect(item.orderInfoId).to.equal(1)
      })
    })
  })
});