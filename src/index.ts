import express from 'express'
import userroute from './routes/user-route'


const app = express()
const port = 3000
app.use(express.json())
app.use(userroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
