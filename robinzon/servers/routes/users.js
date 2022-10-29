import express from 'express'
import { userLogin, createUser } from '../controllers/users.js'


const router = express.Router()

router.get('/', userLogin)
router.post('/', createUser)

export default router