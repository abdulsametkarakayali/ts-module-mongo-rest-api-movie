import mongoose from "mongoose";

const MovieShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        maxlength:30,
        minlength:1,
    },
    country:{
        type:String,
        maxlength:30,
        minlength:1,
    },
    year:{
        type:Number,
        max:2050,
        min:1900
    },
    imdb_score:{
        type:Number,
        max:10,
        min:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
        
})

module.exports = mongoose.model('Movie',MovieShema);