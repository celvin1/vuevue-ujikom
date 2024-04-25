-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 01:34 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api-express`
--

-- --------------------------------------------------------

--
-- Table structure for table `informasis`
--

CREATE TABLE `informasis` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `informasis`
--

INSERT INTO `informasis` (`id`, `judul`, `description`, `gambar`, `createdAt`, `updatedAt`) VALUES
(2, 'asomasodada', 'dajbdahdbhabdahdadada', 'info.jpg', '2024-03-01 07:44:27', '2024-03-01 07:44:27'),
(3, 'asomasodada', 'dajbdahdbhabdahdadada', 'info.jpg', '2024-03-01 07:44:49', '2024-03-01 07:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `kontaks`
--

CREATE TABLE `kontaks` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kontaks`
--

INSERT INTO `kontaks` (`id`, `nama`, `email`, `description`, `createdAt`, `updatedAt`) VALUES
(4, 'rival ganteng', 'agdvagdadda@gmail.com', 'hallo gaess', '2024-04-20 04:26:17', '2024-04-20 04:26:17'),
(8, 'vinn gantengg', 'bvb@gmail.com', 'hi', '2024-04-20 05:51:54', '2024-04-20 05:51:54'),
(9, 'iri', 'dvd@gmail.com', 'gg bang web nya', '2024-04-20 05:55:18', '2024-04-20 05:55:18'),
(19, 'adada', 'dada@gmail.com', 'hihihhihi', '2024-04-25 08:00:27', '2024-04-25 08:00:27');

-- --------------------------------------------------------

--
-- Table structure for table `produks`
--

CREATE TABLE `produks` (
  `id` int(11) NOT NULL,
  `nama_produk` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produks`
--

INSERT INTO `produks` (`id`, `nama_produk`, `description`, `gambar`, `createdAt`, `updatedAt`) VALUES
(7, 'BMW', 'LIHAT SEBELUM MEMBELI', 'https://coversuper.com/blog/wp-content/uploads/2018/05/modifikasi-mobil.jpg', '2024-04-23 02:25:38', '2024-04-24 17:27:17'),
(20, 'AVANZA', 'LIHAT SEBELUM MEMBELI', 'https://bursaotomotif.net/wp-content/uploads/2016/06/gambar-mobil-avanza-2016-1024x568.jpg', '2024-04-23 10:46:45', '2024-04-24 01:46:26'),
(21, 'XPENDER', 'LIHAT SEBELUM MEMBELI', 'https://3.bp.blogspot.com/-l_j7YWnv25o/WdDpl_9y6_I/AAAAAAAAABM/mokm6ucaReUo9JVrjEClJ-EjkblCswP_ACLcBGAs/s1600/expander1.jpg', '2024-04-23 10:47:37', '2024-04-24 07:48:44'),
(23, 'ELISE', 'LIHAT SEBELUM MEMBELI', 'https://4.bp.blogspot.com/-M3ElGl66n-8/UphTWfI2X1I/AAAAAAAABGE/74UzEgmWeH4/s1600/mobil+laris+9.jpg', '2024-04-24 01:45:20', '2024-04-24 01:45:20'),
(37, 'HONDA CONCEPTD', 'lihat ', 'https://3.bp.blogspot.com/-jk_wL2fBTrs/VU3B6h9evQI/AAAAAAAAARk/ksWxstFl2YA/s1600/Mobil%2BHonda%2BTerbaru%2BConcept%2BD%2BMemulai%2BDebutnya%2Bdi%2BChina.jpg', '2024-04-24 12:07:38', '2024-04-24 13:13:37');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240130071738-create-user.js'),
('20240229023817-create-produk.js'),
('20240229064432-create-kontak.js'),
('20240301033838-create-gallery.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','member') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'vin2', 'admin@gmail.com', '$2a$10$bUj3tmrmO83YYAL0VOD9fe4sPyYGxDSULKex2DFhPZfHW0aGltMjC', 'admin', '2024-03-04 04:06:32', '2024-03-04 04:06:32'),
(18, 'ahhha', 'admin2@gmail.com', '$2a$10$j34YM/4OTBXjSHdz/WoUWu00sUqI4udFaiV4C8UHeutGswowu1cbe', 'admin', '2024-04-22 11:15:06', '2024-04-22 11:15:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `informasis`
--
ALTER TABLE `informasis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kontaks`
--
ALTER TABLE `kontaks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produks`
--
ALTER TABLE `produks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `informasis`
--
ALTER TABLE `informasis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kontaks`
--
ALTER TABLE `kontaks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `produks`
--
ALTER TABLE `produks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
