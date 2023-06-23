const express = require("express")
const router = express.Router()
const movie =  require('../Model/MovieModel')
const Category = require("../Model/CategoryModel")


// TO GET ALL THE MOVIES USING "GET" METHOD
router.get("/",async(req,res)=>{
    try {
        const getMovie = await movie.find().populate("categories")
        res.json(getMovie)
    } catch (error) {
        console.log(error+"err")
    }
})

// TO GET ONE MOVIE USING "GET" METHOD BY "ID"
// router.get("/:id",async(req,res)=>{
//     try {
//         const Movie2 = await movie.findById(req.params.id).populate("categories")
//         res.json(Movie2)
//     } catch (error) {
//         console.log(error)
//     }
// })


router.get('/:id', async (req, res) => {
    try {
      const Movie2 = await movie.findById(req.params.id).populate('categories');
      res.json(Movie2);
    } catch (error) {
        res.send(error)
    }
  });

// TO POST THE MOVIE USING "POST" METHOD
router.post("/",async(req,res)=>{
    try {
        const { movie_poster,movie_upload,movie_name,movie_description,categories} = req.body;   
        const category = await Category.findById(categories);
        const postMovies = new movie({movie_poster,movie_upload,movie_name,movie_description, categories: category._id})
        await postMovies.save()
        res.json(postMovies)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

// TO UPDATE THE MOVIE USING "PUT" METHOD BY "ID"
router.put("/:id",async(req,res)=>{
    try {
        const editMovie = await movie.findByIdAndUpdate(req.params.id,req.body).populate("categories")
        res.json(editMovie)
    } catch (error) {
        console.log(error)
    }
})

// TO DELETE THE MOVIE USING "DELETE" METHOD BY "ID"
router.delete("/:id",async(req,res)=>{
    try {
        const deleteMovie = await movie.findByIdAndDelete(req.params)
        res.json(deleteMovie)
    } catch (error) {
        console.log(error)
    }
})

module.exports=router