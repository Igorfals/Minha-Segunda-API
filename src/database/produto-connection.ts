import { connection as knex } from './conection/knex'

export class ProdutoConnection {
    getProdutos() {
        return knex.select('*').from('produto')
    }
    setProduto(produto: any) {
        return knex.insert(produto).from('produto')
    }
    updateProduto(produto: any, id: number){
        return knex.update(produto).from('produto').where('id_produto', id)
    }
    deleteProduto(id: number) {
        return knex.from('produto').where('id_produto', id).del()
    }
}