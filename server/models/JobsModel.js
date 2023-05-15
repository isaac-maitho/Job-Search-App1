const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('job', jobSchema)