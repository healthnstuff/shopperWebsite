const Sequelize = require('sequelize');
const db = require('../db');

const Session = db.define('session', {
    total: {
        type: Sequelize.FLOAT,
        defaultValue: 0
    }
});

module.exports = Session;