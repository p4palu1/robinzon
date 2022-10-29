import express from "express"
import { getPopUpById, createPopUp, editPopUp } from "../controllers/popUp.js"

const router = express.Router()

router.get("/", getPopUpById)
router.post("/", createPopUp)
router.put("/", editPopUp)

export default router