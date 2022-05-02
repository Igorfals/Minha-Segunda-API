import { UserConnection } from "../../../database/user-connection"
import { Request, Response} from 'express'
import { compararSenha, gerarHash } from "../../../helpers/bcrypt"
import { gerartoken } from "../../../helpers/auth"

const userconnection = new UserConnection()

export class LoginController {
    async login(req:Request, res: Response) {
        try {
            const {email, password} = req.body
            if (!email) {
                return res.status(400).send({mensagem: 'Email obrigatorio!'})
            }
            if (!password) {
                return res.status(400).send({mensagem: 'Password obrigatorio!'})
            }
            const user = await userconnection.login(email)
            if (!user?.id_user) {
                return res.status(400).send({mensagem: 'Email não cadastrado!'})
            }
            const verificarsenha = await compararSenha(password, user.password)
            if (!verificarsenha) {
                return res.status(400).send({mensagem: 'Email ou Senha invalido!'})
            }
            const token= gerartoken(user)
            res.status(200).send({token})
        } catch (error) {
            res.status(500).send({mensagem: 'ERRO no servidor!!'})
        }
    }
}