const express =require('express');
const app = express();
const mongoose = require ("mongoose");



const menSchema = mongoose.Schema({
    ranking:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        trim:true,
        required:true
    },
    dob:{
        type:Date,
        required:true,
        property:true
    },
    country:{
        type:String,
        trim:true,
        required:true
    },
    score:{
        type:Number,
        trim:true,
        required:true
    },
    event:{
        type:String,
       default: '100 Mtr'
    }    
});

const MensRanking = new mongoose.model('MenRanking',menSchema);

module.exports = MensRanking;