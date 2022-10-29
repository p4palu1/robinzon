import User from "../models/UserModel.js"
import asyncHandler from "express-async-handler"

export const userLogin = asyncHandler(async (req, res) => {
    const username = req.query.username
    const password = req.query.password

        const loggedUser = await User.findOne({username: username, password: password}).exec()
        if(loggedUser === null || !loggedUser){
            res.status(401)
            throw new Error("incorrect email or password")
        } else {
            res.status(200).json(loggedUser)
        }

})

export const createUser = async (req, res) => {
    const user = req.body
    
    const newUser = new User(user)

    try{
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(409).json({ message: error.message })
    }
}