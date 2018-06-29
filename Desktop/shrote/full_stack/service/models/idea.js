var mongoose = require('mongoose'),
    idea = new mongoose.Schema({
    
        id:{
            type: Number,
            index:1
        },
        idea:String,
        group: String

    });


    module.exports = mongoose.model('Idea',idea); 