import { NomeUsuario } from "./Primitivos/NomeUsuario.js";
import { Senha as Senha} from "./Primitivos/Senha.js"

export class Usuario
{
    constructor(nomeUsuario, senha, confirmaSenha = "")
    {
        this.nomeUsuario = new NomeUsuario(nomeUsuario);
        this.senha = new Senha(senha, confirmaSenha);
    }
}
