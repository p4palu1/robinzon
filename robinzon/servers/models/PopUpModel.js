import mongoose from "mongoose"

const popUpSchema = mongoose.Schema({
    text: String, 
    url: String,
    On: Boolean,
    createdAt : {
        type: Date,
        default: Date.now      
    },
    lastUpdated : {
        type: Date,
        default: Date.now      
    }
})

const popUp = mongoose.model('popUp', popUpSchema)

export default popUp