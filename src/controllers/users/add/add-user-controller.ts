import { UserConnection } from '../../../database/user-connection'
import { Request, Response } from 'express'
import { gerarHash } from '../../../helpers/bcrypt'
import validator from 'validator'
import { UserModel } from '../../../models/user-model'

const service = new UserConnection()

export class AddUsercontroller {
    async addUser(req: Request, res: Response) {
        const {name, email, password, endereco, numero, cidade, estado, status} = req.body
        if (!name) {
            return res.status(400).send({mensagem: 'Name obrigatorio!'})
        }
        if (!email) {
            return res.status(400).send({mensagem: 'Email obrigatorio!'})
        }
        if (!password) {
            return res.status(400).send({mensagem: 'Password obrigatorio!'})
        }
        if (!endereco) {
            return res.status(400).send({mensagem: 'Endereço obrigatorio!'})
        }
        if (!numero) {
            return res.status(400).send({mensagem: 'Número obrigatorio!'})
        }
        if (!cidade) {
            return res.status(400).send({mensagem: 'Cidade obrigatorio!'})
        }
        if (!estado) {
            return res.status(400).send({mensagem: 'Estado obrigatorio!'})
        }
        const verificaremail = validator.isEmail(email);
        if (!verificaremail) {
            return res.status(400).send({mensagem: 'Email invalido!'})
        }
        const hash = await gerarHash(password)
        const user: UserModel = {
            name,
            email,
            password: hash,
            endereco,
            numero,
            cidade,
            estado,
            status
        }
        try {
            await service.setUser(user)
            return res.status(200).send({mensagem: 'Usuario inserido com sucesso!'})
        } catch (error: any) {
            console.log(error);
            if (error.errno==1062) {
                return res.status(400).send({mensagem: 'Email já está em uso!'})
            }
            return res.status(500).send({mensagem: 'ERRO ao inserir o usuario!'})
        }
    }
}
