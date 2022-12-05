const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  userid: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  pw: { type: String, require: true },
})


userSchema.statics.findAll = () => this.find({})

userSchema.statics.findOneByUserid = (userid) => this.findOne({ userid })

userSchema.statics.updateByUserid = (userid, payload) => this.findOneAndUpdate({ userid }, payload, { new: true })

userSchema.statics.deleteByUserid = (userid) => this.remove({ userid })

module.exports = mongoose.model("User", userSchema)