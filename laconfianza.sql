-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-09-2023 a las 20:05:05
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laconfianza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accesorios`
--

CREATE TABLE `accesorios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Talle` varchar(10) NOT NULL,
  `Color` varchar(10) NOT NULL,
  `Precio` double NOT NULL,
  `PrecioTarjeta` double NOT NULL,
  `Imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `accesorios`
--

INSERT INTO `accesorios` (`ID`, `Nombre`, `Talle`, `Color`, `Precio`, `PrecioTarjeta`, `Imagen`) VALUES
(1, 'Sombrero', 'S', 'rojo', 1000, 1200, 'https://imgs.search.brave.com/_yVFFBs_I2hvTzbgxfxJrSBHdCNSXHtjWMwR-xkflEU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzU0/MDI3MzEvcGhvdG8v/c29tYnJlcm8uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUxN/WnFRbC1BTVRFRzJJ/QVc1a1pydk5BSWVF/dTVfeG1U'),
(2, 'Pulsera', 'L', 'negro', 200, 210, 'https://imgs.search.brave.com/-8aKmxDakbhNThMm_e6JU0pNR6sZrNuFlb9kR5yG9dM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ldS1p/bWFnZXMuY29udGVu/dHN0YWNrLmNvbS92/My9hc3NldHMvYmx0/N2RjZDJjZmJjOTBk/NDVkZS9ibHQ1MDY0/NzU2NWFlYzg3Nzky/LzYwZGJhZGNhZWQ5/M2JiMGZiMTk5Yjhh/NC8xMC00'),
(3, 'Gorro', 'XL', 'azul', 300, 320, 'https://imgs.search.brave.com/hhsEj0_ZIQ8X5V5LhnFpZDdZAKOx4P6MkfVdomwYMG8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGFmaXRpLmNv/bS5hci9wL3RvcHBl/ci04ODI2LTAyOTcz/MjEtMS1jYXRhbG9n/LW5ldy5qcGc'),
(4, 'Lentes', 'X', 'naranja', 150, 155, 'https://imgs.search.brave.com/NeZpFy4aogVw3spo6Bt6wgVpkqusk-RB-XidHLdUrmo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbmZp/bml0LmxhL2Nkbi9z/aG9wL3Byb2R1Y3Rz/LzFfNTRhZmMwNDUt/MDA1NC00NDM2LTlj/YjYtNGJhNzIwNDA1/NzkxLmpwZz92PTE2/ODE5OTI1NDAmd2lk/dGg9MTIwMA'),
(5, 'Gorra', 'XXL', 'blanco', 600, 625, 'https://imgs.search.brave.com/yS7RvIVTj8gO0GW4ckSVn8VlAaV7z0oYSkGmt4VtWm8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucHVsbGFuZGJl/YXIubmV0LzIvcGhv/dG9zLzIwMjMvSS8w/LzIvcC80ODMyLzUx/MS8wMTUvNDgzMjUx/MTAxNV8xXzFfMy5q/cGc_dD0xNjgyNDMw/NjEyOTg2'),
(6, 'Collar', 'M', 'gris', 1200, 1300, 'https://imgs.search.brave.com/Ejek3cAQ9XBg172ci0xiHPSxuVS55DvdWYaVfZJ18v4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaW5n/dWxhcnUuY29tL2Nk/bi9zaG9wL3Byb2R1/Y3RzL2NvbGxhcl9j/aGljX3BsYXRhLmpw/Zz9jcm9wPWNlbnRl/ciZoZWlnaHQ9NjE4/JnY9MTY1NTIwMjcz/OCZ3aWR0aD00NTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `IDcategoria` int(11) NOT NULL,
  `categoria` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`IDcategoria`, `categoria`) VALUES
(1, 'Remera'),
(2, 'Campera'),
(3, 'Buzo'),
(4, 'Jean'),
(5, 'Pantalón elastizado '),
(6, 'Zapatillas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prendas`
--

CREATE TABLE `prendas` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Talle` varchar(10) NOT NULL,
  `Color` varchar(10) NOT NULL,
  `Precio` double NOT NULL,
  `PrecioTarjeta` double NOT NULL,
  `Imagen` varchar(255) NOT NULL,
  `IDcategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prendas`
--

INSERT INTO `prendas` (`ID`, `Nombre`, `Talle`, `Color`, `Precio`, `PrecioTarjeta`, `Imagen`, `IDcategoria`) VALUES
(1, 'Remera', 'S', 'negro', 200, 210, 'https://imgs.search.brave.com/ZlsVEkQmr9714vZkdgduCdsREyFLJ_ag9Mia4lbnzvY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGFmaXRpLmNv/bS5hci9wL3RvcHBl/ci04Nzk1LTA5OTcz/MjEtMS1jYXRhbG9n/LW5ldy5qcGc', 1),
(2, 'Pantalon', 'X', 'azul', 150, 155, 'https://imgs.search.brave.com/DHTU31XuVtjRlEx4ChYp6gKei38Av9gHrtngL2rP6CI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGFmaXRpLmNv/bS5hci9wL2xlZ2Fj/eS04MTg1LTQ3ODQ5/OC0xLWNhdGFsb2ct/bmV3LmpwZw', 4),
(3, 'Pantalon', 'L', 'verde', 300, 320, 'https://imgs.search.brave.com/oat5iYv6UnFyTPfWH0YNeHzg3YV3Uk-9eBTDiC8OSzU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MjE4NzktTUxBNTIx/OTg5MjIwNTZfMTAy/MDIyLVcud2VicA', 5),
(4, 'Nike', 'M', 'negro', 1200, 1300, 'https://imgs.search.brave.com/8zsAE1ZIBAKKJS_YA7z6N8NofoYj043CDfdr3jhnOo8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kYXNo/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy85MzUzNTIt/NTAwLWF1dG8_dj0x/NzgxNTIyNTY4Jndp/ZHRoPTUwMCZoZWln/aHQ9YXV0byZhc3Bl/Y3Q9dHJ1ZQ.jpeg', 6),
(5, 'Buzo', 'XXL', 'blanco', 1000, 1200, 'https://imgs.search.brave.com/0dyYX8nwrIHeJmQJzxbT4eHsqrEgNJfqKx2YLAVmwDM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGFmaXRpLmNv/bS5hci9wL2NhbnRl/cmJ1cnktMDg0Ny00/OTU0NjIxLTEtY2F0/YWxvZy1uZXcuanBn', 3),
(6, 'Campera', 'X', 'marron', 1200, 1300, 'https://imgs.search.brave.com/QKNrv3j5MyoSDQx3YfbGsR_5fWZ-wkI_OlKCmosGS0Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV2cmUubGEvbWVk/aWEvY2F0YWxvZy9w/cm9kdWN0L2QvZS9k/ZXZyZS1jYW1wZXJh/XzAxZDAwMDExNS0w/MTJfMDAxLmpwZw', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(25) NOT NULL,
  `Contraseña` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Nombre`, `Contraseña`) VALUES
(1, 'Admin', '123'),
(2, 'Tfp', '321'),
(3, 'fabry', '33'),
(4, 'fantasmon', 'fantasmosis'),
(5, 'fulstack', 'oa'),
(6, 'ñ', 'ñ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accesorios`
--
ALTER TABLE `accesorios`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IDcategoria`);

--
-- Indices de la tabla `prendas`
--
ALTER TABLE `prendas`
  ADD KEY `IDcategoria` (`IDcategoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accesorios`
--
ALTER TABLE `accesorios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `IDcategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prendas`
--
ALTER TABLE `prendas`
  ADD CONSTRAINT `prendas_ibfk_1` FOREIGN KEY (`IDcategoria`) REFERENCES `categoria` (`IDcategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
