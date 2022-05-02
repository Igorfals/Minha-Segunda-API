import { connection as knex } from "./conection/knex";

export class UserConnection{
    getUser() {
        return knex.select('*').from('users')
    }
    setUser(user: any){
        return knex.insert(user).from('users')
    }
    updateUser(user: any, id: number){
        return knex.update(user).from('users').where('id_user', id)
    }
    login(email: string){
        return knex.from('users').where('email', email).andWhere('status',1).first()
    }
}