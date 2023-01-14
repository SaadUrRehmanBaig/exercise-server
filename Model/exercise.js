const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    activityType: {
        type:String,
        enum: {
      values: ["run", "bicycle ride", 'swim', "walk", 'hike'],
      message: '{VALUE} is not supported'
        },
        required: true
    },

    duration: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true  
    }
})

const exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = exercise;
