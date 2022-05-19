import express from 'express'
import cors from 'cors'
import routers from  './routes/'


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(routers)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
