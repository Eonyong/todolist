const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
  data: Object
})

userSchema.statics.create = function (payload) {
  const user = new this(payload)
  return user.save()
}


module.exports = mongoose.model("User", userSchema)