export class NomeUsuario
{
    constructor(nome)
    {
        this.nome = nome;
        if(!this.minimoCaracteres())
        {
            throw new Error("O nome de usuário é menor que 2 caracteres!");
        }
    }
    minimoCaracteres()
    {
        return this.nome.length >= 2;
    }
}