const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
    movie_poster:{
        type:String,
        required:true
    },
    movie_upload:{
        type:String,
        required:true
    },
    movie_name:{
        type:String,
        required:true
    },
    movie_description:{
        type:String,
        required:true
    },
    categories:{
        type:mongoose.Types.ObjectId,
        ref:"category",
        required:true
    },
    key:{   
        type:String,
        // required:true
    }
},{ strictPopulate: false })

const movie = mongoose.model("movie",movieSchema)
module.exports=movie