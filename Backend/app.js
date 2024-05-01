import express,{urlencoded} from 'express'
import { config } from 'dotenv'
// import {fileUpload} from 'express-fileupload'
import { ErrorMiddeleware } from './MiddelWare/Error.js'
import fileUploads from 'express-fileupload'
import cloudinary  from 'cloudinary'
import cors from 'cors'

config({
    path:"./config/config.env"
})

cloudinary.config({ 
    cloud_name: 'dlinbaowa', 
    api_key: '811992712136645', 
    api_secret: 'rpCZ7kD4XR03pXq3xtGvtQBcqRE' 
    });
    
    const app = express()
    
    
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
app.use(fileUploads({
    useTempFiles:true
  }))
  app.use(cors())
  import product from './Routes/ProductRoute.js'
  import user from './Routes/UserRoute.js'
  
app.use('/api/v1',product)
app.use('/api/v2',user)

export default app

app.use(ErrorMiddeleware)