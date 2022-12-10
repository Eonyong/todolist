const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: true, trime: true },
  lastName: { type: String, required: true, trime: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, trime: true },
})


userSchema.statics.findAll = () => this.find({})

userSchema.statics.findOneByUserid = (userid) => this.findOne({ userid })

userSchema.statics.updateByUserid = (userid, payload) => this.findOneAndUpdate({ userid }, payload, { new: true })

userSchema.statics.deleteByUserid = (userid) => this.remove({ userid })

module.exports = mongoose.model("User", userSchema)