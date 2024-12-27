import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    minlength: [3, "Title must be at least 3 characters long"],
    maxlength: [100, "Title cannot exceed 100 characters"],
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    trim: true,
    minlength: [3, "Description must be at least 3 characters long"],
    maxlength: [1000, "Description cannot exceed 1000 characters"],
    required: [true, "Description is required"],
  },
  author: {
    type: String,
    trim: true,
    minlength: [3, "Author must be at least 3 characters long"],
    maxlength: [50, "Author: Firstname Lastname exceed 100 characters"],
    required: [true, "Author is required"],
  },
  publisher: {
    type: String,
    trim: true,
    minlength: [3, "Publisher must be at least 3 characters long"],
    maxlength: [50, "Publisher cannot exceed 100 characters"],
    required: [true, "Publisher is required"],
  },
  publicationDate: {
    type: String,
  },
  genre: {
    type: [String],
    trim: true,
  },
  lannguage: {
    type: [String],
    default: "English",
    trim: true, 
  },
  filename: { type: String, required: true },
  imageBase64: {
    type: String, // Base64-encoded string
    trim: true,
  },
  contentType: {
    type: String, // e.g., "image/png" or "image/jpeg"
    trim: true,
  },path: {
    type: String,
    required: true,
  },
});

const bookModel = mongoose.model("Book", bookSchema);
export default bookModel;
