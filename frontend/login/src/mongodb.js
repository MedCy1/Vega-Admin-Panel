const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://vegalogs:SCdkqvLDpRZTAZHG@cluster0.chb44o9.mongodb.net/")
.then(()=>{
    console.log("mongodb Connected")
})
.catch(()=>{
    console.log("Failed")
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1", LogInSchema)

module.exports=collection