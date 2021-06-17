/* global describe beforeEach it */

const {expect} = require('chai')
const { db, models: { OrderInfo } } = require('../../index');
// const seed = require('../../../script/seed');

describe('OrderInfo model', () => {
  beforeEach(async () => {
    await db.sync({ force: true })
  })

  describe('Basic Fields: total', () => {
    describe('total', () => {
      it('is not empty', async () => {
        const order = await OrderInfo.create({total: 20.17});
        expect(order.total).to.equal(20.17)
      });
    });
  });
});
