import { Router } from "express"
import { GetUserController } from "../controllers/users/get/get-user-controller"
import { AddUsercontroller } from "../controllers/users/add/add-user-controller"
import { UpdateUserController } from "../controllers/users/update/update-user-controller"
import { LoginController } from "../controllers/users/login/login-user-controller"
import { authorize } from "../helpers/auth"
import { DeleteUserController } from "../controllers/users/delete/delete-user-controller"

const getusercontroller = new GetUserController()
const addusercontroller = new AddUsercontroller()
const updadeusercontroller = new UpdateUserController()
const logincontroller = new LoginController()
const deleteusercontroller = new DeleteUserController()

const router = Router()
router.get('/users', authorize, getusercontroller.getUSers)
router.post('/user', addusercontroller.addUser)
router.post('/login', logincontroller.login)
router.put('/user/:id', updadeusercontroller.updateUser)
router.delete('/user/:id', authorize, deleteusercontroller.deleteUser)

export default router
