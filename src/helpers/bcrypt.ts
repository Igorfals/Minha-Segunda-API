import bcrypt from 'bcrypt'
export function gerarHash(senha: string){
    return bcrypt.hash(senha, 15)
}

export function compararSenha(senha: string, hash: string){
    return bcrypt.compare(senha, hash)
}
