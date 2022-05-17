import { Request, Response } from 'express'
import { ProdutoConnection } from "../../../database/produto-connection"
const produtoconnection = new ProdutoConnection()

export class UpdateProdutoController {
    async updateProduto(req: Request, res: Response) {
        const { id } = req.params
        const idalterado = parseInt(id)
        if (isNaN(idalterado)) {
            return res.status(400).send({mensagem:'O parametro deve ser do tipo numero'})
        }
        const {name, preco, descricao, status} = req.body
        const produto = {
            name,
            preco,
            descricao,
            status
        }
        try {
            await produtoconnection.updateProduto(produto, idalterado)
            return res.status(200).send({mensagem:'Produto alterado com sucesso'})
        } catch (error) {
            return res.status(500).send({mesnagem:'ERRO ao alterar o produto!'})
        }
    }
}