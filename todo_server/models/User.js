const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
  data: Object
})

userSchema.statics.create = (payload) => {
  const user = new this(payload)
  return user.save()
}

userSchema.statics.findAll = () => this.find({})

userSchema.statics.findOneByUserid = (userid) => this.findOne({ userid })

userSchema.statics.updateByUserid = (userid, payload) => this.findOneAndUpdate({ userid }, payload, { new: true })

userSchema.statics.deleteByUserid = (userid) => this.remove({ userid })

module.exports = mongoose.model("User", userSchema)