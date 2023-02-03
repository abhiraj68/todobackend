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
    userID: {
      type:String
     
    }
  });

const todoModel = mongoose.model("note", todoSchema)

module.exports = {
  todoModel
}