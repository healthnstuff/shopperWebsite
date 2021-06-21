const { expect } = require('chai');
const request = require('supertest');
const { db, models: { Product } } = require('../../db');
const seed = require('../../../script/seed');
const app = require('../../app');

describe('Product routes', () => {
    beforeEach(async() => {
        await seed();
    });
    describe('/api/products/', async () => {
        it('POST adds a product instance to the Product model');
        const res = await request(app).post('/api/products')
            .send({ name: 'Sample Product', price: 1000, inventory: 10 })
            .expect(201)
            .expect(function (res) {
                expect(res.body).to.eql({
                    name: 'Sample Product',
                    price: 1000,
                    inventory: 10
                });
            });
    });
});