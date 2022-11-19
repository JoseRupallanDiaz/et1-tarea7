import {getSum, getSubstraction, getMultiplication, getDivision} from "../controllers/operation.controller.js"
import express from 'express'

const router = express.Router()

router.get("/sum", getSum)
router.get("/substraction", getSubstraction)
router.get("/multiplication", getMultiplication)
router.get("/division", getDivision)

export default router