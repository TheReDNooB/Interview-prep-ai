const mongoose = require('mongoose');

const UserChema = new mongoose.Schema({
  name: { type: String, required:true },
  email: { type: String, required:true, unique:true },
  password: { type: String, required:true },
  profileImageUrl: { type: String, default:true },
  },
  { timestamps:true}
);

module.exports = mongoose.model('User', UserChema);