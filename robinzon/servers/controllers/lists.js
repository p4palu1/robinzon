import Module from "../models/ModuleModel.js";
import asyncHandler from "express-async-handler";


export const moduleUp = async(req, res) => {
    const { order, _id } = req.body

    const lowerModule = await Module.findOne({ order: order }).exec();
    const upperModule = await Module.findOne({ order: order+1 }).exec();
    if(order > -1){
        if(lowerModule && upperModule){
            lowerModule.order = order + 1
            upperModule.order = order
        } else{
            res.status(404)
            throw new Error("not found")
        }

        try{
            if(lowerModule && upperModule){
                const newModule = await lowerModule.save()
                const newModule2 = await upperModule.save()
                res.json([newModule, newModule2])
            }
        }
        catch(error){
            res.json(error)
        }

    }   
}

export const moduleDown = async(req, res) => {
    const { order, _id } = req.body

    const upperModule = await Module.findOne({ order: order }).exec();
    const lowerModule = await Module.findOne({ order: order-1 }).exec();
    if(order > -1){
        if(lowerModule && upperModule){
            lowerModule.order = order
            upperModule.order = order - 1
        } else{
            res.status(404)
            throw new Error("not found")
        }

        try{
            if(lowerModule && upperModule){
                const newModule = await lowerModule.save()
                const newModule2 = await upperModule.save()
                res.json([newModule, newModule2])
            }
        }
        catch(error){
            res.json(error)
        }

    }   
}