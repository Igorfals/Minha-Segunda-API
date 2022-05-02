import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'


const SALT_KEY = 'eau12i1!@VOJ{!@}'
export function authorize(req: Request, res: Response, next: NextFunction) {
    const token: any = req.headers['x-access-token']
    
    if (!token) {
        return res.status(401).send({ menagem: 'Usuario não autorizado!' })
    }
    else {
        jwt.verify(token, SALT_KEY, function (error: any, decode: any) {
            if (error) {
                return res.status(401).send({ mensagem: 'Usuario não autorizado!' })
            }   
          next()
        })
    }
}
export function gerartoken(usertoken: any) {
    return jwt.sign({ usertoken }, SALT_KEY)
}