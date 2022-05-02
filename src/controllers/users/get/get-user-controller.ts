import { UserConnection } from "../../../database/user-connection"
import { Request, Response } from "express"
const service = new UserConnection()

export class GetUserController {
    async getUSers (req: Request, res: Response) {
        const users = await service.getUser()
        return res.status(200).send({users})
    }
}