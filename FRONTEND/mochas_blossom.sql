-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-09-2025 a las 03:21:09
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mochas_blossom`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

DROP TABLE IF EXISTS `cuenta`;
CREATE TABLE IF NOT EXISTS `cuenta` (
  `idcuenta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `corre_E` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `num_tarj` varchar(100) NOT NULL,
  PRIMARY KEY (`idcuenta`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`idcuenta`, `nombre`, `corre_E`, `telefono`, `direccion`, `num_tarj`) VALUES
(1, 'karol', 'jkajs@gmail.com', '3156543931', 'calle 39', '1111111111111111111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ini_sesi`
--

DROP TABLE IF EXISTS `ini_sesi`;
CREATE TABLE IF NOT EXISTS `ini_sesi` (
  `idini_sesi` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `passwordd` varchar(100) NOT NULL,
  PRIMARY KEY (`idini_sesi`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ini_sesi`
--

INSERT INTO `ini_sesi` (`idini_sesi`, `email`, `passwordd`) VALUES
(6, 'karolbarrero51@gmail.com', '0000'),
(5, 'karolbarrero51@gmail.com', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idpedidos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `metodo_pago` varchar(50) NOT NULL,
  `Num_tarj` varchar(20) NOT NULL,
  `cvv` varchar(4) NOT NULL,
  `fech_cad` date NOT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idpedidos`, `nombre`, `direccion`, `telefono`, `email`, `fecha`, `hora`, `metodo_pago`, `Num_tarj`, `cvv`, `fech_cad`) VALUES
(1, '', '', 0, 'karolbarrero51@gmail.com', '0000-00-00', '00:00:00', '', '', '', '0000-00-00'),
(2, '', '', 0, 'karolbarrero51@gmail.com', '0000-00-00', '00:00:00', '', '', '', '0000-00-00'),
(3, '', '', 0, 'karolbarrero51@gmail.com', '0000-00-00', '00:00:00', '', '', '', '0000-00-00'),
(4, 'karol', 'calle 39', 2147483647, 'karolbarrero51@gmail.com', '2025-09-18', '10:37:00', '', '', '', '0000-00-00'),
(5, 'karol', 'calle 39', 2147483647, 'karolbarrero51@gmail.com', '2025-09-18', '10:37:00', 'tarjeta_credito', '1111111111111111111', '4983', '2025-09-15'),
(6, 'karol', 'calle 39', 2147483647, 'karolbarrero51@gmail.com', '2025-09-11', '23:39:00', 'tarjeta_credito', '1111111111111111111', '1111', '2025-09-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_nequi`
--

DROP TABLE IF EXISTS `pedidos_nequi`;
CREATE TABLE IF NOT EXISTS `pedidos_nequi` (
  `idpedidos_nequi` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `metodo_pago` varchar(100) NOT NULL,
  `numtelefono` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `cor_elec` varchar(100) NOT NULL,
  PRIMARY KEY (`idpedidos_nequi`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pedidos_nequi`
--

INSERT INTO `pedidos_nequi` (`idpedidos_nequi`, `nombre`, `telefono`, `direccion`, `email`, `fecha`, `hora`, `metodo_pago`, `numtelefono`, `nom`, `cor_elec`) VALUES
(1, 'karol', '3156543931', 'calle 39', 'karolbarrero51@gmail.com', '2025-09-04', '09:58:00', 'nq', '3156543931', 'san', 'sa@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personalizacio`
--

DROP TABLE IF EXISTS `personalizacio`;
CREATE TABLE IF NOT EXISTS `personalizacio` (
  `idpersonalizacio` int NOT NULL AUTO_INCREMENT,
  `sabor` varchar(100) NOT NULL,
  `rel` varchar(100) NOT NULL,
  `tamano` varchar(100) NOT NULL,
  `cober` varchar(100) NOT NULL,
  `decor` varchar(100) NOT NULL,
  PRIMARY KEY (`idpersonalizacio`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `personalizacio`
--

INSERT INTO `personalizacio` (`idpersonalizacio`, `sabor`, `rel`, `tamano`, `cober`, `decor`) VALUES
(1, 'matcha', 'arequipe', '20', 'fresa', 'ateez'),
(2, 'matcha', 'arequipe', '20', 'fresa', 'ateez'),
(3, 'chocolate', 'arequipe', '20', 'fresa', 'ateez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regis`
--

DROP TABLE IF EXISTS `regis`;
CREATE TABLE IF NOT EXISTS `regis` (
  `idregis` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `passwordd` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idregis`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `regis`
--

INSERT INTO `regis` (`idregis`, `usuario`, `email`, `passwordd`) VALUES
(7, 'haru', 'wosan@gmail.com', '0019282'),
(6, 'haru', 'karolbarrero51@gmail.com', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
