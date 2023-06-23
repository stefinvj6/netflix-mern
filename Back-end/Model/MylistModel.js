const mongoose =require("mongoose")
const Schema = mongoose.Schema

const mylistSchema = new Schema({
    mymovie:{
        type:mongoose.Types.ObjectId,
        ref:'movie'
    }
},{ strictPopulate: false })

const mylist = mongoose.model("mylist",mylistSchema)
module.exports = mylist