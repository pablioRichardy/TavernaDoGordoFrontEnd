<?php

use Tavernadogordo\Frontend\helpers\Rota;
$rota = new Rota();

$rota->adicionar("GET", "/", "IndexController@renderizar");
$rota->adicionar("GET", "/registrar", "UsuarioController@renderizar");