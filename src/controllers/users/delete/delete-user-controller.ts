import { Request, Response } from "express"
import { UserConnection } from "../../../database/user-connection"
const service = new UserConnection()

export class DeleteUserController {
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params
        const idalterado = parseInt(id)

        if (isNaN(idalterado)) {
            return res.status(400).send({ mensagem: 'O parametro deve ser do tipo número!' })
        }
        try {
            await service.deleteUser(idalterado)
            return res.status(200).send({ mensagem: 'Usuario deletado com sucesso!' })
        } catch (error) {
            return res.status(500).send({ mensagem: 'ERRO ao deletar o usuario!' })
        }
    }
}