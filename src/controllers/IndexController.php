<?php

namespace Tavernadogordo\Frontend\controllers;

use Tavernadogordo\Frontend\view\partials\Head;

class IndexController
{
    public function renderizar() : void
    {
        echo Head::renderizar("TavernaDoGordo - Home", "cadastrar");
    }
}