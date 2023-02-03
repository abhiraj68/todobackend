

const express = require("express")

const {todoModel} = require("../models/todo.model")

const todoRouter = express.Router();


todoRouter.get("/", async (req, res) => {
    const notes = await NoteModel.find()
    res.send(notes)
})

todoRouter.post("/create", async (req, res) => {
    const payload = req.body
    //get token from header
    //verify token using jwt
    try{
        const new_note = new NoteModel(payload)
        await new_note.save()
        res.send({"msg" : "Note created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

todoRouter.patch("/update/:noteID", async (req, res) => {
        const noteID = req.params.noteID
        const userID = req.body.userID
        const note = await NoteModel.findOne({_id:noteID})
        if(userID !== note.userID){
            res.send("Not authorised")
        }
        else{
            await NoteModel.findByIdAndUpdate({_id : noteID},payload)
            res.send({"msg" : "Note updated successfully"})
        }
})

todoRouter.delete("/delete/:noteID", async (req, res) => {
    const noteID = req.params.noteID
    await NoteModel.findByIdAndDelete({_id : noteID})
    res.send({"msg" : "Note deleted successfully"})
})


module.exports = {todoRouter}


