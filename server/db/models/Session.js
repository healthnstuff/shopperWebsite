const Sequelize = require('sequelize');
const db = require('../db');

const Session = db.define('session', {
    total: Sequelize.DECIMAL
});

module.exports = Session;