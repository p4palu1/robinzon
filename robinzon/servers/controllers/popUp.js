import popUp from "../models/PopUpModel.js"
import asyncHandler from "express-async-handler"

export const getPopUpById = async(req, res) => {
    const popUpFetched = await popUp.findById("6359485d9f23f7aac22a20bf")

    if(popUpFetched) {
        res.status(201).json(popUpFetched)
    } else{
        throw new Error("product not found")
    }
}

export const editPopUp = asyncHandler(async(req, res) => {
    const newPopUp = req.body
    const _id = "6359485d9f23f7aac22a20bf"

     const npopUp = await popUp.findById(_id)
     if(popUp){
        npopUp.text = newPopUp.text
        npopUp.url = newPopUp.url
        npopUp.On = newPopUp.On
     } else {
        res.status(404)
        throw new Error('popup not found')
     }

    const updatedPopUp = await npopUp.save()
     res.json(updatedPopUp)
     
})


export const createPopUp = async (req, res) => {
    const nPopUp = req.body
    
    const newPopUp = new popUp(nPopUp)

    try{
        await newPopUp.save()
        res.status(201).json(newPopUp)
    }
    catch(error){
        res.status(409).json({ message: error.message })
    }
}
