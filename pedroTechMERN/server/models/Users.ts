import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

//collection convert into lowercase in mongodb
const UserModel = mongoose.model("pedroTechUsers", UserSchema);

export default UserModel;