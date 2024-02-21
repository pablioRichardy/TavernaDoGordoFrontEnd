export class UsuarioRepository {
    async criar(usuario) {
        let dados = await fetch(
            "http://localhost:45000/usuarios",
            {
                method: "POST",
                body: JSON.stringify({
                    "nomeUsuario": usuario.nomeUsuario.nome,
                    "senha": usuario.senha.senha
                }),
            }
        )
        let dadosJSON = await dados.json();
        return dadosJSON;
    }

    logar() {

    }
}