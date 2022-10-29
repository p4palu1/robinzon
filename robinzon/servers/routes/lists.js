import express from 'express'
import { moduleDown, moduleUp } from '../controllers/lists.js'


const router = express.Router()

router.put("/up", moduleUp)
router.put("/down", moduleDown)

export default router