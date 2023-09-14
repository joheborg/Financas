use main;
create table financas
(
`id` int NOT NULL AUTO_INCREMENT primary key
,`idUsuario` int not null
,`dt_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
,`descDespesa` varchar(99) DEFAULT NULL
,`valorDespesa` decimal(10,2) DEFAULT NULL
,`idTipoGasto` int not null
);