import { Router } from "express"
import { authorize } from '../helpers/auth'
import { AddProdutoController } from '../controllers/produto/add/add-produto-controller'
import { GetProdutoController } from "../controllers/produto/get/get-produto-controler"
import { UpdateProdutoController } from "../controllers/produto/update/update-produto-controller"
import { DeleteProdutoController } from "../controllers/produto/delete/delete-produto-controller" 


const getprodutocontroller = new GetProdutoController()
const addprodutocontroller = new AddProdutoController()
const updateprodutocontroller = new UpdateProdutoController()
const deleteprodutocontroller = new DeleteProdutoController()


const route = Router()

route.get('/produto', authorize, getprodutocontroller.getProduto)
route.post('/produto', authorize, addprodutocontroller.addProduto)
route.put('/produto/:id', authorize, updateprodutocontroller.updateProduto)
route.delete('/produto/:id', authorize, deleteprodutocontroller.deleteProduto) 



export default route