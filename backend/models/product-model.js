//const mongoose = require("mongoose");
import mongoose from "mongoose";

// let productOne = {
//     name: "mobile1",
//     price: 100,
//     description: "mobile description",
//     is_Available: true
// }
// let productTwo = {
//     name: "mobile2",
//     price: 1000,
//     description: "mobile description 2",
//     is_Available: true,
//     storage:{
//         ram: "4gb",
//         rom: "64gb"
//     },
//     color:["red","blue"]
// }

//database schema defination and storing it in the variable so that it will be easier to export
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  price: Number,
  description: String,
  is_Available: Boolean,
  color: [String],
  storage: {
    ram: String,
    rom: String,
  },
  code: {
    type: String,
  },
});

const uM = mongoose.model("Product", userSchema);
export default uM;
