<?php

namespace Tavernadogordo\Frontend\view\partials;

class Head
{
    public static function renderizar(string $tituloPagina, string $style) : string
    {
        return "
            <!DOCTYPE html>
            <html lang='pt-br'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'>
                <link rel='stylesheet' href='/styles/padrao.css' type='text/css'>
                <link rel='stylesheet' href='/styles/$style.css' type='text/css'>
                <title>$tituloPagina</title>
            </head>
            <body>
        ";
    }
}
    