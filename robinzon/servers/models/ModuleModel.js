import mongoose from 'mongoose'

const moduleSchema = mongoose.Schema({
    type: Number,
    order: Number,
    photos: [String],
    bgColor: String,
    title: String,
    text: String,
    textColor: String,
    createdAt: {
        type: Date,  
        Default: new Date()
    }
})

const Module = mongoose.model('Module', moduleSchema)

export default Module