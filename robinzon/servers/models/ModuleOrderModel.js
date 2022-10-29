import mongoose from 'mongoose'

const ModuleListSchema = mongoose.Schema({
  list: [String],
  createdAt: {
    type: Date,
    default: Date.now() 
  }
})

const ModuleList = mongoose.model('ModuleList', ModuleListSchema)
export default ModuleList