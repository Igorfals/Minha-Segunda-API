import express from 'express'
import userroute from './routes/user-route'
import cors from 'cors'
import produto from './routes/produto'


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(userroute)
app.use(produto)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
