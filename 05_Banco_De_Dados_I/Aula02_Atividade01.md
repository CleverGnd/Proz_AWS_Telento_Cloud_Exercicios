# Banco de Dados I - Aula 02
## 📄 Atividade 01 - Realizar cálculos de consultas em banco de dados
Aluno: Cleverson Guandalin

---
# Consultas em banco de dados

![Imagem do banco de dados](/05_Banco_De_Dados_I/Imagem01_Atividade04_BancoDeDadosI.png)


## Mostre as informações apenas dos alunos aprovados. A aprovação é acima de 7,0;

```SQL
SELECT * FROM ALUNO WHERE NOTA > 7.0;
```

## Exiba as informações dos alunos do primeiro ano com nota maior ou igual a 8,0;

```SQL
SELECT * FROM ALUNO WHERE ANO = 1 AND NOTA >= 8.0;
```


## Exiba apenas os nomes e as notas dos alunos;

```SQL
SELECT NOME, NOTA FROM ALUNO;
```

## Crie uma tabela PROFESSOR que apresente apenas o primeiro e o último nome do professor;

```SQL
CREATE TABLE PROFESSOR (
  ID INT NOT NULL,
  PNome VARCHAR(255) NOT NULL,
  UNome VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);
```

## Crie uma tabela ALUNO com o primeiro e o último nome de cada;

```SQL
CREATE TABLE ALUNO (
  ID INT NOT NULL,
  PNome VARCHAR(255) NOT NULL,
  UNome VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);
```

## Mostre o resultado da união entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;

```SQL
SELECT PNome, UNome FROM ALUNO
```

## Exiba o resultado da intersecção entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;

```SQL
SELECT PNome, UNome FROM ALUNO
```

## Exiba o resultado da diferença entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR. 

```SQL
SELECT PNome, UNome FROM ALUNO
```