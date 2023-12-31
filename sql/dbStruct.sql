use main;

CREATE TABLE TipoDespesa (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Tipo VARCHAR(99) NOT NULL UNIQUE KEY
);

CREATE TABLE Financas (
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  IDUsuario INT NOT NULL,
  DataCadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  DescricaoDespesa VARCHAR(99) DEFAULT NULL,
  ValorDespesa DECIMAL(10, 2) DEFAULT NULL,
  IDTipoDespesa INT NOT NULL,
  KEY FK_TipoDespesa (IDTipoDespesa),
  CONSTRAINT FK_TipoDespesa FOREIGN KEY (IDTipoDespesa) REFERENCES TipoDespesa (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


	