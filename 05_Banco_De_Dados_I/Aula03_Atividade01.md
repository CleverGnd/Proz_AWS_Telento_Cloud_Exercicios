# Banco de Dados I - Aula 03
## 📄 Atividade 01 - Implementar um banco de dados em SQL 
Aluno: Cleverson Guandalin

---
# Códigos SQL

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