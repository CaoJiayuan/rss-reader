'use strict'
let path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})
module.exports = {
  NODE_ENV: '"production"',
  RSS_HOST: JSON.stringify(process.env.RSS_HOST)
}
