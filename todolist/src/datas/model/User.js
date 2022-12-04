const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

module.exports = mongoose.model('Users', new Schema({
  nameId: { type: String },
  email: { type: String },
  createAt: { type: Date, default: Date.now },
},{
  versionKey: false
}))
