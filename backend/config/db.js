const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://abhiraj:rajappan@cluster0.mddr3hc.mongodb.net/?retryWrites=true&w=majority")


module.exports = {
    connection
}