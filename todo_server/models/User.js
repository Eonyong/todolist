const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
})

// const UserTodos = new mongoose.Schema({
//   creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   todos: [{ type: String }]
// })

userSchema.statics.findAll = () => this.find({})

userSchema.statics.findOneByUserid = (userid) => this.findOne({ id: userid })

userSchema.statics.updateByUserid = (userid, payload) => this.findOneAndUpdate({ userid }, payload, { new: true })

userSchema.statics.deleteByUserid = (userid) => this.remove({ userid })

module.exports = mongoose.model("User", userSchema)
// module.exports = mongoose.model("UserTodos", UserTodos)