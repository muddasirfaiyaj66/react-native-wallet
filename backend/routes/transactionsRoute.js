import express from "express"

import {createTransactions, deleteTransactions, getTransactionsByUserId, getTransactionsSummary} from '../controllers/transationsControllers.js'
const router = express.Router()
router.get("/:userId",getTransactionsByUserId )
router.post("/",createTransactions)

router.delete("/:id", deleteTransactions)

router.get("/summary/:userId", getTransactionsSummary)


export default router;