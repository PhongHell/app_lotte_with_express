const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  onStart: {
    type: Date,
    required: true,
  },
  isValid : {
    type: Boolean,
    required : true
  },
  isManager : {
    type : Boolean,
    require : true,
    default : false
  },
  name : {
    type : String,
    require : true,
  }

});

module.exports = mongoose.model("User", userSchema);
