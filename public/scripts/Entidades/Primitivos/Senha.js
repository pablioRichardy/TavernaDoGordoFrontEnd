export class Senha
{
    constructor(senha, confirmaSenha = "")
    {
        this.senha = senha;
        this.confirmaSenha = confirmaSenha;
        if(!(this.confimarSenha() && this.contemCaracteresNecessarios() && this.tamanhoSenha()))
        {
            throw new Error("A senha deve conter caracteres especiais e ser maior que 8 caraceres ou as senhas não são iguais. Por favor, digite novamente!");
        }
    }
    confimarSenha()
    {
        return this.senha == this.confirmaSenha;
    }
    contemCaracteresNecessarios()
    {
        return /[a-z]/.test(this.senha) && /[A-Z]/.test(this.senha) && /[0-9]/.test(this.senha) && /[*-@.,]/.test(this.senha);
    }
    tamanhoSenha()
    {
        return this.senha.length > 8;
    }
}