import { Router } from "express"
import { authorize } from '../../helpers/auth'
import { DeleteProdutoController, GetProdutoController, AddProdutoController, UpdateProdutoController } from "../../controllers/produto" 


const getprodutocontroller = new GetProdutoController()
const addprodutocontroller = new AddProdutoController()
const updateprodutocontroller = new UpdateProdutoController()
const deleteprodutocontroller = new DeleteProdutoController()


const route = Router()

route.get('/', authorize, getprodutocontroller.getProduto)
route.post('/', authorize, addprodutocontroller.addProduto)
route.put('/:id', authorize, updateprodutocontroller.updateProduto)
route.delete('/:id', authorize, deleteprodutocontroller.deleteProduto) 



export default route