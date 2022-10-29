import Module from '../models/ModuleModel.js'
import ModuleOrder from '../models/ModuleOrderModel.js'
import asyncHandler from "express-async-handler"

export const getModules = async (req, res) => {
    try {
        const Modules = await Module.find()
        
        res.status(200).json(Modules)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getModuleById = asyncHandler( async(req, res) => {
     const module = await Module.findById(req.params.id)

        if(module){
            res.json(module)
        } else{
            res.status(404)
            throw new Error("module not found")
        }
    
})

export const createModule = async (req, res) => {
    const module = req.body
    
    const newModule = new Module(module)

    try{
        await newModule.save()
        res.status(201).json(newModule)
    }
    catch(error){
        res.status(409).json({ message: error.message })
    }
}
export const updateModule = asyncHandler(async(req, res) => {
    const newModule = req.body
    console.log(newModule)
     const module = await Module.findById(req.params.id)
     if(module){
        module.type = newModule.type
        module.order = newModule.order
        module.photos = newModule.photos
        module.bgColor = newModule.bgColor
        module.title = newModule.title
        module.text = newModule.text
        module.textColor = newModule.textColor
     } else {
        res.status(404)
        throw new Error('module not found')
     }

    const updatedModule = await module.save()
     res.json(updatedModule)
     
})

export const deleteModule = async(req, res) => {
    const module = await Module.findById(req.params.id)

    if(module){
        await module.remove()
        res.json({message: 'module removed'})
    } else{
        res.status(404)
        throw new Error("product not found")
    } 
}


