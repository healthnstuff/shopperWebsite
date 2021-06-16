/* global describe beforeEach it */

const {expect} = require('chai')
const { db, models: { orderInfo} } = require('../index')
// const seed = require('../../../script/seed');

describe('OrderInfo model', () => {
  beforeEach(async () => {
    await db.sync({ force: true })
  })

  describe('Basic Fields: total', () => {
    describe('total', () => {
      it('total is a float', async () => {
        const order = await orderInfo.create({total: 20.17});
        expect(order.total).to.equal(20.17)
      })
    })
  })
}) // end describe('User model')
