-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 30-12-2022 a las 17:01:37
-- Versión del servidor: 8.0.31-0ubuntu0.22.04.1
-- Versión de PHP: 8.1.2-1ubuntu2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prodes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int NOT NULL,
  `titulo` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'CROACIA A CUARTOS!', 'Se impuso contra Brasil por penales', 'Con un golazo en el minuto 105, Neymar le dio la ventaja a Brasil, pero no duró mucho porque Petkovic igualó el partido en el minuto 117 haciendo que se defina al ganador por penales. Si bien Brasil dominó casi todo el partido, Croacia ganó por 4-2 en los penales.'),
(2, 'GRACIAS DIBU!', 'Con una actuación sobresaliente del arquero Martinez, estamos en semis.', 'Con un resultado muy cómodo para Argentina, Paises Bajos logró empatarlo sobre el final, llevándonos al alargue donde el equipo fue muy superior, pero no pudo liquidarlo con chances claras. Con dos atajadas históricas de Dibu Martínez y una definición exquisita de Lautaro Martínez como último pateador, nos enfrentamos contra Croacia por la semifinal del mundial.'),
(3, 'HAZAÑA AFRICANA', 'Marruecos es el primer equipo africano en jugar una semifinal de un mundial.', 'Con la culminación de un mundial para el olvido de Cristiano Ronaldo, Marruecos llega a la semifinal con un resultado de 1-0 sobre Portugal. Se enfrentará al ganador de Francia - Inglaterra.'),
(4, 'ESTAMOS EN LA FINAL', 'Superioridad futbolistica', 'Con un espectáculo de fútbol, Argentina goleó a Croacia por 3 a 0. Con goles de Julián Álvarez (2) y Messi, estamos cada vez mas cerca del sueño máximo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `user` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`) VALUES
(1, 'gonzalo', '2a62168908310c613ce8310af6806b3b');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
