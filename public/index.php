<?php

ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);

require_once "../vendor/autoload.php";

require_once("rotas.php");

$rota->buscar($_SERVER["REQUEST_URI"], $_SERVER["REQUEST_METHOD"]);