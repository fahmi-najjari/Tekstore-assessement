const express = require('express')
const cors=require('cors')
const {connection }=require('./models/index')
const App = express()
const port = 4999
const productRouter=require('./routes/product')
App.use(express.json())
App.use(cors())


App.use('/api/product',productRouter)
App.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})