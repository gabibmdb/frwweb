const Sequelize = require('sequelize')

const evironment = process.env.NODE_ENV || 'development'

const config = require("../config/config.js")[evironment]

const sequelize = new Sequelize (
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
)