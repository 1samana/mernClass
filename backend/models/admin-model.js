import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  role: {
    type: String,
    required: true,
    enum: ["Admin", "Teacher"],
    default: "Teacher",
  },
  phone: [
    {
      type: String,
      required: true,
      default: null,
      trim: true,
      unique: true,
    },
  ],

  address: {
    type: String,
    default: null,

    trim: true,
  },
});
const AdminModel = mongoose.model("admin", adminSchema);
export default AdminModel;
