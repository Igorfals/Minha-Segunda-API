import { UserConnection } from "../../../database/user-connection"
import { Request, Response } from "express"
import { gerarHash } from "../../../helpers/bcrypt"
import validator from "validator"
import { UserModel } from "../../../models/user-model"

const userconnection = new UserConnection()
export class UpdateUserController {
    async updateUser(req: Request, res: Response) {
        const { id } = req.params 
        const { name, email, password, endereco, numero, cidade, estado, status } = req.body
        if (email) {
            const verificaremail = validator.isEmail(email)
            if (!verificaremail) {
                return res.status(400).send({ mensagem: 'Email invalido!' })
            }
        }
        let hash = null
        if (password) {
            hash = await gerarHash(password)
        }
        const user: UserModel = {
            name,
            email,
            endereco,
            numero,
            cidade,
            estado,
            status,
            password: hash
        }
        
        try {
            await userconnection.updateUser(user, parseInt(id))
            return res.status(200).send({ mensagem: 'Usuario aleterado com sucesso!' })
        } catch (error: any) {
            console.log();
            if (error.errno == 1062) {
                return res.status(400).send({ mensagem: 'Email já está em uso!' })
            }
            return res.status(500).send({ mensagem: 'ERRO ao alterar o usuario' })
        }
    }
}