<?php

namespace Tavernadogordo\Frontend\controllers;

use Tavernadogordo\Frontend\view\partials\Head;

class UsuarioController
{
    public function renderizar()
    {
        echo Head::renderizar("Registrar - Taverna do Gordo", "registrar",  "/scripts/CriarUsuario.js");
        
        include "../src/view/pages/registrar.php";
    }   
}