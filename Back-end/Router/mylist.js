const express =require("express")
const router = express.Router()
const mylist = require('../Model/MylistModel')

router.get("/",async(req,res)=>{
    try {
        const getmylist = await mylist.find().populate("mymovie")
        res.json(getmylist)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const getmylistid=await mylist.findById(req.params.id).populate("mymovie")
        res.json(getmylistid)
    } catch (error) {
        res.send(error)
    }
})

router.post("/",async(req,res)=>{
    try {
        const postmylist = new mylist(req.body)
        await postmylist.save()
        res.json(postmylist)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deletemylist = await mylist.findByIdAndDelete(req.params.id)
        res.json(deletemylist)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router