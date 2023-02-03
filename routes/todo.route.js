

const express = require("express")

const {todoModel} = require("../models/todo.model")

const todoRouter = express.Router();
// taskName: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: String,
//     required: true
//   },
//   tag: {
//     type: String,
//     required: true
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// });

todoRouter.get("/", async (req, res) => {
    const userID = req.body.userID
    console.log(userID)
    const notes = await todoModel.find({userID})
    res.send(notes)
})

todoRouter.post("/", async (req, res) => {
   
    const payload = req.body
    //get token from header
    //verify token using jwt
    try{
        const new_note = new todoModel(payload)
        await new_note.save()
        res.send({"msg" : "Note created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

todoRouter.patch("/:noteID", async (req, res) => {
        const noteID = req.params.noteID
        const userID = req.body.userID
        const note = await todoModel.findOne({_id:noteID})
        if(userID !== note.userID){
            res.send("Not authorised")
        }
        else{
            await todoModel.findByIdAndUpdate({_id : noteID},req.body)
            res.send({"msg" : "Note updated successfully"})
        }
})

todoRouter.delete("/:noteID", async (req, res) => {
    const noteID = req.params.noteID
    const userID = req.body.userID
    const note = await todoModel.findOne({_id:noteID})
    if(userID !== note.userID){
        res.send("Not authorised")
    }
    else{
        await todoModel.findByIdAndDelete({_id : noteID})
        res.send({"msg" : "Note deleted successfully"})
    }
   
})


module.exports = {todoRouter}


