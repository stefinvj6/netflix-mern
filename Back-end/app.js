const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port =3333;
const cors = require("cors")

mongoose.set('strictQuery', false);

main().then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log(err)
});
async function main(){
    await mongoose.connect('mongodb+srv://vjstefin:miUi0p5jdOO6MV8g@cluster0.kcclz3h.mongodb.net/')
}

app.use(express.json())
app.use(cors())

// CALLING MOVIE FROM ROUTER
const Movies = require('./Router/movie')
app.use('/movie',Movies)

// CALLING MYLIST MOVIES FROM ROUTER    
const Mylists = require('./Router/mylist')
app.use('/mylist',Mylists)

const Categorys = require("./Router/category")
app.use("/category",Categorys)

const Getcategorys = require('./Router/Getcategory')
app.use("/getcategory",Getcategorys)

app.listen(port,()=>{
    console.log(`app is listen on : ${port}`)
})