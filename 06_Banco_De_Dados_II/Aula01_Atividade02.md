# Banco de Dados II - Aula 01
## 📄 Atividade 02 - Conceber e saber quando utilizar o Trigger para melhorar uma ação desejada no banco de dados.  
Aluno: Cleverson Guandalin

---
# Uitlizando Trigger

## Criando uma base de dados

Para criar uma base de dados, usamos o comando `CREATE DATABASE`. Por exemplo, para criar uma base de dados chamada `db_banco` usamos o seguinte comando:

```SQL
CREATE DATABASE db_banco;
```

## Criando um banco de dados

Para criar um banco de dados, usamos o comando `CREATE DATABASE`. Por exemplo, para criar um banco de dados chamado `db_estoque` usamos o seguinte comando:

```SQL
CREATE DATABASE db_estoque;
```

## Criando tabelas
Para criar uma tabela, usamos o comando `CREATE TABLE`. Por exemplo, para criar uma tabela chamada produtos com os atributos `id`, `nome`, `descricao`, `quantidade`, `preco`, usamos o seguinte comando:

```SQL
CREATE TABLE produtos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);
```

Determinando os atributos de cada tabela

Os atributos da tabela produtos são os seguintes:
 - id: um identificador único para cada produto.
 - nome: o nome do produto.
 - descricao: uma descrição do produto.
 - quantidade: a quantidade de produtos disponíveis.
 - preco: o preço do produto.

## Executando um trigger

Vamos criar um trigger que seja executado sempre que uma nova linha for inserida na tabela `produtos`. O trigger irá aumentar o estoque do produto em uma unidade.

O código do trigger é o seguinte:

```SQL
CREATE TRIGGER `atualizar_estoque` AFTER INSERT ON produtos
FOR EACH ROW
BEGIN
  UPDATE produtos
    SET quantidade = quantidade + 1
    WHERE id = NEW.id;
END;
```

Para executar o trigger, precisamos ativar o banco de dados. Podemos fazer isso usando o comando USE. Por exemplo, para ativar o banco de dados db_estoque, usamos o seguinte comando:

```SQL
USE db_estoque;
```

Agora, podemos inserir um novo produto na tabela `produtos`. Por exemplo, para inserir um produto com o nome `Caneta`, a descrição `Caneta azul`, a quantidade `10` e o preço `10.00`, usamos o seguinte comando:

```SQL
INSERT INTO produtos (nome, descricao, quantidade, preco)
VALUES ('Caneta', 'Caneta azul', 10, 10.00);
```

Após a execução do comando, o estoque do produto `Caneta` será atualizado para `11`.

Podemos verificar o estoque do produto usando o comando `SELECT`. Por exemplo, para selecionar o estoque do produto `Caneta`, usamos o seguinte comando:

```SQL
SELECT quantidade
FROM produtos
WHERE nome = 'Caneta';
```

O resultado da consulta será o seguinte:

quantidade
-------
11
