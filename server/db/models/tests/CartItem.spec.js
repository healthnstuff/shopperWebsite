/* global describe beforeEach it */

const {expect} = require('chai')
const { db, models: { CartItem} } = require('../../index');
// const seed = require('../../../script/seed');

describe('CartItem model', () => {
  beforeEach(async () => {
    await db.sync({ force: true })
  })

  describe('Basic Fields: quantity', () => {
    describe('quantity', () => {
      xit('is not empty', async () => {
        const item = await CartItem.create({quantity: 2});
        expect(item.quantity).to.equal(2)
      });
    });
  });
});