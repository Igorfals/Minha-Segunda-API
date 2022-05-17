import {Request, Response} from 'express'
import { ProdutoConnection } from '../../../database/produto-connection'

const service = new ProdutoConnection()


export class DeleteProdutoController{
    async deleteProduto(req: Request, res: Response) {
        const {id} = req.params
        const idalterado = parseInt(id)
        if (isNaN(idalterado)) {
            return res.status(400).send({mensagem:'O parametro deve ser do tipo numero'})
        }
        try {
            await service.deleteProduto(idalterado)
            return res.status(200).send({mensagem:'Produto deletado com sucesso!'})
        } catch (error) {
            return res.status(500).send({mensagem:'ERRO ao deletar o produto!'})
        }
    }
}