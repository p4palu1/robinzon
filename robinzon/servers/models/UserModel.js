import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:  String,
    email: String, 
    password: String,
    createdAt: {
        type: Date,  
        Default: new Date()
    }
})

const User = mongoose.model('User', userSchema)

export default User