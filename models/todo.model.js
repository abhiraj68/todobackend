const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    taskName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  });

const todoModel = mongoose.model("note", todoSchema)

module.exports = {
  todoModel
}