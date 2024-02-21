export class Mensagem
{
    static mostrar(codigo, mensagem)
    {
        const FEEDBACK_ERROS = document.querySelector("#FeedBackErros");

        let clas = "erro";
        let icon = `<i class="bi bi-x" id="erro"></i>`;
        if(codigo == "200")
        {
            clas = "sucesso";
            icon = `<i class="bi bi-check-lg" id="sucesso"></i>`;
        }

        FEEDBACK_ERROS.setAttribute("class", clas);
        FEEDBACK_ERROS.innerHTML = `
            ${icon}
            ${mensagem}
        `;
    }
}