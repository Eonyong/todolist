module.exports = {
  enc: function (id, password, salt) {
    const sha256 = require("sha256")
    return sha256(id + password + salt)
  }
}