<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2c7c0fad7022b727395eff0c00655946
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Tavernadogordo\\Frontend\\' => 24,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Tavernadogordo\\Frontend\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2c7c0fad7022b727395eff0c00655946::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2c7c0fad7022b727395eff0c00655946::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2c7c0fad7022b727395eff0c00655946::$classMap;

        }, null, ClassLoader::class);
    }
}
