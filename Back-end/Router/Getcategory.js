const express = require("express")
const router = express.Router()
const movie = require("../Model/MovieModel")
const mongoose = require("mongoose")
// const category = require('../Model/CategoryModel')

router.get("/",async(req,res)=>{
    try {
        const getCategory = await movie.find({categories:"6475702c4071abc03419c117"}).populate("categories")
        res.json(getCategory)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

// router.get("/:id",async(req,res)=>{
//     try {
//         const Category = await category.findById(categoryId);
//         const getCategory = await movie.findById({categories:req.params._id}).populate("categories")
//         res.json(Category)
//     } catch (error) {
//         res.send(error)
//         console.log(error)
//     }
// })


// Get all movies in a category by ID
router.get('/:id', async (req, res) => {
    try {
      const getCategory = await movie.find({ categories: req.params.id }).populate("categories")
      res.json(getCategory);
    } catch (error) {
        res.send(error)
    }
  });

module.exports = router