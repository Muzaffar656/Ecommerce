import express from 'express'
import { CreateProduct,GetallProduct,singleProduct } from '../Controller/ProductController.js'
const router = express.Router()

router.route('/createproduct').post(CreateProduct)
router.route('/getallproduct').get(GetallProduct)
router.route('/product/:id').get(singleProduct)
export default router