import { Router } from "express"
import fs from 'fs'

const routers = Router() 
fs.readdirSync('./src/routes/group-route').forEach(async(file)=>{
    file = file.replace('.ts','')
    const active = await import(`./group-route/${file}`)
    routers.use(`/${file}`, active.default)
    
    
})

export default routers