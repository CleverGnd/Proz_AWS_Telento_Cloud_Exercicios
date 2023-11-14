# Banco de Dados II - Aula 01
## 📄 Atividade 01 - Compreender e aplicar todas as condições para execução de junções.  
Aluno: Cleverson Guandalin

---
# Desenvolvendo um Banco de Dados e Relacionando Tabelas através de Chaves 

## Criando uma base de dados

Para criar uma base de dados, usamos o comando `CREATE DATABASE`. Por exemplo, para criar uma base de dados chamada `db_banco` usamos o seguinte comando:

```SQL
CREATE DATABASE db_banco;
```

## Criando tabelas

Para criar uma tabela, usamos o comando `CREATE TABLE`. Por exemplo, para criar uma tabela chamada `clientes` com os atributos `id`, `nome`, `email` e `telefone`, usamos o seguinte comando:

```SQL
CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
```

## Adicionando atributos

Podemos adicionar atributos a uma tabela existente usando o comando `ALTER TABLE`. Por exemplo, para adicionar um atributo chamado `endereco` à tabela `clientes`, usamos o seguinte comando:

```SQL
ALTER TABLE clientes ADD endereco VARCHAR(255) NOT NULL;
```

## Inserindo dados

Podemos inserir dados em uma tabela usando o comando `INSERT INTO`. Por exemplo, para inserir os seguintes dados na tabela `clientes`:

id | nome | email | telefone | endereco
-- | -- | -- | -- | --
1 | João | joao@gmail.com | 11 9999-9999 | Rua das Flores, 123
2 | Maria | maria@gmail.com | 11 8888-8888 | Avenida Paulista, 456

usamos o seguinte comando:

```SQL
INSERT INTO clientes (nome, email, telefone, endereco) VALUES
('João', 'joao@gmail.com', '11 9999-9999', 'Rua das Flores, 123'),
('Maria', 'maria@gmail.com', '11 8888-8888', 'Avenida Paulista, 456');
```

## Utilizando Joins para realizar consultas nas tabelas

Os Joins são comandos que permitem combinar dados de duas ou mais tabelas. Existem vários tipos de Joins, cada um com uma finalidade específica.

### Inner Join

O Inner Join retorna todos os registros das tabelas envolvidas na consulta, desde que haja uma correspondência entre os valores das colunas relacionadas.

Por exemplo, para retornar todos os registros das tabelas `clientes` e `pedidos`, onde o `id_cliente` da tabela `pedidos` seja igual ao `id` da tabela `clientes`, usamos o seguinte comando:

```SQL
SELECT
  clientes.id,
  clientes.nome,
  clientes.email,
  clientes.telefone,
  clientes.endereco,
  pedidos.id_pedido,
  pedidos.data_pedido,
  pedidos.valor_total
FROM clientes
INNER JOIN pedidos
ON clientes.id = pedidos.id_cliente;
```

### Outer Join

O Outer Join retorna todos os registros de uma das tabelas envolvidas na consulta, mesmo que não haja uma correspondência entre os valores das colunas relacionadas.

Por exemplo, para retornar todos os registros da tabela `clientes`, mesmo que não tenham pedidos, e todos os registros da tabela `pedidos`, mesmo que não tenham um cliente associado, usamos o seguinte comando:

```SQL
SELECT
  clientes.id,
  clientes.nome,
  clientes.email,
  clientes.telefone,
  clientes.endereco,
  pedidos.id_pedido,
  pedidos.data_pedido,
  pedidos.valor_total
FROM clientes
LEFT JOIN pedidos
ON clientes.id = pedidos.id_cliente;
```

Full Outer Join

O Full Outer Join retorna todos os registros de ambas as tabelas envolvidas na consulta, mesmo que não haja uma correspondência entre os valores das colunas relacionadas.

Por exemplo, para retornar todos os registros das tabelas `clientes` e `pedidos`, incluindo registros de clientes sem pedidos e registros de pedidos sem clientes, usamos o seguinte comando:

```SQL
SELECT
  clientes.id,
  clientes.nome,
  clientes.email,
  clientes.telefone,
  clientes.endereco,
  pedidos.id_pedido,
  pedidos.data_
```