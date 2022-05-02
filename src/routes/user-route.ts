import { Router } from "express"
import { GetUserController } from "../controllers/users/get/get-user-controller"
import { AddUsercontroller } from "../controllers/users/add/add-user-controller"
import { UpdateUserController } from "../controllers/users/update/update-user-controller"
import { LoginController } from "../controllers/users/login/login-user-controller"
import { authorize } from "../helpers/auth"

const getusercontroller = new GetUserController()
const addusercontroller = new AddUsercontroller()
const updadeusercontroller = new UpdateUserController()
const logincontroller = new LoginController()

const router = Router()
router.get('/users', getusercontroller.getUSers)
router.post('/user', addusercontroller.addUser)
router.post('/login', logincontroller.login)
router.put('/user/:id', authorize, updadeusercontroller.updateUser)


export default router