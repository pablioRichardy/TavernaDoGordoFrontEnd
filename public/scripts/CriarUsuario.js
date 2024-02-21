import { Usuario as Usuario } from "./Entidades/Usuario.js";
import { Mensagem } from "./Ajudantes/Mensagem.js";
import { UsuarioRepository as UsuarioRepository } from "./Infraestrutura/UsuarioRepository.js";

const BTN_REGISTRAR = document.querySelector("#registrar");

const FORM = document.querySelector("#form");
const SENHA_INPUT = document.querySelector("#senha");
const CONFIRMA_SENHA_INPUT = document.querySelector("#confirmaSenha");

const MOSTRA_SENHA = document.querySelector("#mostraSenha");
const ESCONDE_SENHA = document.querySelector("#escondeSenha");
const MOSTRA_CONFIRMA_SENHA = document.querySelector("#mostraConfirmaSenha");
const ESCONDE_CONFIRMA_SENHA = document.querySelector("#escondeConfirmaSenha");

BTN_REGISTRAR.addEventListener("click", 
    async () => {
        const NOME_USUARIO = document.querySelector("#usuario").value;
        const SENHA = document.querySelector("#senha").value;
        const CONFIRMA_SENHA = document.querySelector("#confirmaSenha").value;
        
        try{
            const USUARIO = new Usuario(NOME_USUARIO, SENHA, CONFIRMA_SENHA);
            const usuarioRepository = new UsuarioRepository();
            const RESPONSE = await usuarioRepository.criar(USUARIO);

            Mensagem.mostrar(RESPONSE["codigo"], RESPONSE["mensagem"]);
        } 
        catch(er)
        {
            Mensagem.mostrar(400, er.message);
        }
         
    }
);

FORM.addEventListener("click", 
    (element) => {
        switch(element.target.id)
        {
            case "escondeSenha":
                ESCONDE_SENHA.style.display = "none";
                MOSTRA_SENHA.style.display = "inline";
                SENHA_INPUT.type = "password";
                break;
            case "mostraSenha":
                MOSTRA_SENHA.style.display = "none";
                ESCONDE_SENHA.style.display = "inline";
                SENHA_INPUT.type = "text";
                break;
            case "escondeConfirmaSenha":
                ESCONDE_CONFIRMA_SENHA.style.display = "none";
                MOSTRA_CONFIRMA_SENHA.style.display = "inline";
                CONFIRMA_SENHA_INPUT.type = "password";
                break;
            case "mostraConfirmaSenha":
                MOSTRA_CONFIRMA_SENHA.style.display = "none";
                ESCONDE_CONFIRMA_SENHA.style.display = "inline";
                CONFIRMA_SENHA_INPUT.type = "text";
                break;
        }
    }
);