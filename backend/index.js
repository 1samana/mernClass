// //const express = require("express");
// import express from "express";
// const app = express();
// //importing the database connection in index.js
// import "./dbconfig/conn.js";

// //const mongoose = require("mongoose");
// app.get("/home", (req, res) => {
//     res.send("First api");
// });
// app.get("/home/product", (req, res) => {
//     res.send("Second api");s
// });
// app.get("/home/price", (req, res) => {
//     res.send("Third api");
// });
// app.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });
// const express = require("express");
import express from "express";
import bcrypt from "bcryptjs"; // this is for ES6 i
import multer from "multer";
const app = express();

//importing database connection in index.js
// import "./dbconfig/conn.js";
import connectDB from "./dbconfig/conn.js";
import uM from "./models/product-model.js";
import AdminModel from "./models/admin-model.js";
import bookModel from "./models/book.js";
import cors from "cors";
//connection function call
connectDB();
//middleware
app.use(express.json());
//for form data and image
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//first api
app.get("/home", (req, res) => {
  res.send("This is home page");
});

//second api
app.get("/product/page", (req, res) => {
  res.json({ msg: "Product page" });
});

//API register the users in db async because it will take some time to register the user in db
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const checkEmail = await uM.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ msg: `${email} email already exists` });
    }
    //to hash the password
    const hashpassword = await bcrypt.hash(password, 10);
    //await because it will take some time and don't want to wait for below code
    const register = new uM({ name, email, password: hashpassword });
    await register.save();
    if (register) {
      res
        .status(200)
        .json({ status: 200, msg: "user registered", data: register });
    } else {
      res.status(400).json({ msg: "user not registered" });
    }
  } catch (error) {
    console.error("Error:", error.message); // Logs error message in server console
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

//API login the users in db
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter email and password" });
    }
    const userLogin = await uM.findOne({ email });
    if (!userLogin) {
      return res.status(400).json({ msg: "Wrong email" });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Wrong password" });
    }

    if (userLogin && isMatch) {
      return res
        .status(200)
        .json({ status: 200, msg: "Logged in successfully", data: userLogin });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
});

//API for admin register
app.post("/admin/register", async (req, res) => {
  try {
    const { name, email, password, role, phone, address } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    const adminRegister = new AdminModel({
      name,
      email,
      password: hashpassword,
      role,
      phone,
      address,
    });
    await adminRegister.save();
    if (adminRegister) {
      return res
        .status(401)
        .json({ msg: "Admin registered successfully", data: adminRegister });
    } else {
      return res.status(400).json({ msg: "Admin not registered" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
});
// admin login
app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Enter both fields" });
    }
    const adminLogin = await AdminModel.findOne({ email });
    if (!adminLogin) {
      return res.status(400).json({ msg: "Wrong email" });
    }
    const isMatch = await bcrypt.compare(password, adminLogin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Wrong password" });
    }
    if (adminLogin && isMatch) {
      return res.status(200).json({ msg: "Logged in", data: adminLogin });
    }
  } catch {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: error.message });
  }
});

//MAP ARRAY SANGA MATR AUSE HUNCHA
// user viewing
app.get("/user/list", async (req, res) => {
  try {
    const users = await uM.find();
    if (users) {
      const totaldata = { totalstudents: users.length };
      const data = users.map((user) => ({
        studentId: user._id,
        name: user.name,
        email: user.email,
      }));
      return res
        .status(200)
        .json({ msg: "Users list", totaldata: totaldata, data: data });
    } else {
      return res.status(400).json({ msg: "No users found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: error.message });
  }
});

//admin viewing

app.get("/admin/list", async (req, res) => {
  try {
    const admin = await AdminModel.find();
    if (!admin) {
      return res.status(200).json({ msg: "Admin list", data: admin });
    } else {
      return res.status(400).json({ msg: "No admin found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: error.message });
  }
});

//admin acc name
app.get("/admin/list/:name", async (req, res) => {
  try {
    const admin = await AdminModel.find({ name: req.params.name });
    return res
      .status(200)
      .json({ msg: "Admin list with user name", data: admin });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", err: error.message });
  }
});

app.post("/book", async (req, res) => {
  try {
    const {
      title,
      description,
      author,
      publisher,
      publicationDate,
      genre,
      lannguage,
    } = req.body;

    const newBook = new bookModel({
      title,
      description,
      author,
      publisher,
      publicationDate,
      genre,
      lannguage,
    });

    await newBook.save();
    return res
      .status(200)
      .json({ msg: "Book added successfully", data: newBook });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Internal server error", data: error.message });
  }
});

app.get("/booklist", async (req, res) => {
  try {
    const books = await bookModel.find();
    if (books) {
      return res
        .status(200)
        .json({ msg: "Books fetched successfully", data: books });
    } else {
      return res.status(400).json({ msg: "No books found" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

app.delete("/bookdelete/:_id", async (req, res) => {
  try {
    const books = await bookModel.findByIdAndDelete(req.params._id);
    if (books) {
      return res.status(200).json({ msg: "Books deleted successfully" });
    } else {
      return res.status(400).json({ msg: "No books found" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

app.patch("/bookupdate/:_id", async (req, res) => {
  try {
    const books = await bookModel.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (books) {
      return res
        .status(200)
        .json({ msg: "Books updated successfully", data: books });
    } else {
      return res.status(400).json({ msg: "No books found" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

app.listen(3000);
