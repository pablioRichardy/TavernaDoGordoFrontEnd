<main>
    <div class="logo">
        <img src="/images/logo.png" alt="uma cerveja com vário dados de RPG, D20, D10..." class="logo-img">
        <h1>TavernaDoGordo</h1>
    </div>
    <div id="form">
        <label for="usuario" class="field">
            <i class="bi bi-person-fill"></i>
            <input type="text" placeholder="usuário" class="txt" id="usuario"/>
        </label>
        <label for="senha" class="field">
            <i class="bi bi-key-fill"></i>
            <input type="password" placeholder="senha" class="txt" id="senha"/>
            <i class="bi bi-eye-slash" style="display: none;" id="escondeSenha"></i>
            <i class="bi bi-eye" id="mostraSenha"></i>
        </label>
        <label for="confirmaSenha" class="field">
            <i class="bi bi-key-fill"></i>
            <input type="password" placeholder="confirmar senha" class="txt" id="confirmaSenha"/>
            <i class="bi bi-eye-slash" style="display: none;" id="escondeConfirmaSenha"></i>
            <i class="bi bi-eye" id="mostraConfirmaSenha"></i>
        </label>
        <button class="enviar" id="registrar">Registar</button>
        <span>Já tem uma conta? <a href="/entrar">Entre aqui</a></span>
        <p id="FeedBackErros">
        </p>
    </div>
</main>
<script src="scripts/CriarUsuario.js" type="module"></script>