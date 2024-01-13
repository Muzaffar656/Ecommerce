import express from 'express'
import { CreateProduct,GetallProduct } from '../Controller/ProductController.js'
const router = express.Router()

router.route('/createproduct').post(CreateProduct)
router.route('/getallproduct').get(GetallProduct)

export default router