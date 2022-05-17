import { Request, Response } from 'express'
import { ProdutoConnection } from '../../../database/produto-connection'

const service = new ProdutoConnection()

export class GetProdutoController {
    async getProduto(req: Request, res: Response) {
        const produto = await service.getProdutos()
        return res.send(produto)
    }
}