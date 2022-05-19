import { Router } from "express"
import { authorize } from "../../helpers/auth"
import { DeleteUserController, GetUserController, AddUsercontroller, LoginController, UpdateUserController } from "../../controllers/users"


const getusercontroller = new GetUserController()
const addusercontroller = new AddUsercontroller()
const updadeusercontroller = new UpdateUserController()
const logincontroller = new LoginController()
const deleteusercontroller = new DeleteUserController()

const router = Router()
router.get('/', authorize, getusercontroller.getUSers)
router.post('/', addusercontroller.addUser)
router.post('/', logincontroller.login)
router.put('/:id', updadeusercontroller.updateUser)
router.delete('/:id', authorize, deleteusercontroller.deleteUser)

export default router
