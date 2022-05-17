import { ProdutoConnection } from '../../../database/produto-connection'
import { Request, Response } from 'express'
const service = new ProdutoConnection()

export class AddProdutoController {
    async addProduto(req: Request, res: Response) {
        const { name, preco, descricao, status } = req.body

        if (!name) {
            return res.status(400).send({ mensagem: 'Nome do produto obrigatorio!' })
        }
        if (!preco) {
            return res.status(400).send({ mensagem: 'Valor do produto obrigatorio!' })

        }

        const produto = {
            name,
            preco,
            descricao,
            status
        }
        try {
            await service.setProduto(produto)
            return res.status(200).send({ mensagem: 'Produto inserido com sucesso!' })
        } catch (error) {
            return res.status(500).send({ mensagem: 'ERRO ao inserir o produto!' })
        }
    }
}