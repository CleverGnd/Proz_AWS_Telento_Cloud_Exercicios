# Banco de Dados I - Aula 03
## 📄 Atividade 01 - Implementar um banco de dados em SQL 
Aluno: Cleverson Guandalin

---
# Códigos SQL

  1. crie uma tabela chamada ALUNO;  
  2. defina os atributos da tabela;
  3. adicione a chave primária de nome ID (identificador);
  4. adicione um atributo nome do tipo varchar;
  5. adicione um atributo e-mail do tipo varchar;
  6. adicione um atributo endereço do tipo varchar.

```SQL
CREATE TABLE ALUNO (
    ID SERIAL PRIMARY KEY,
    Nome VARCHAR(255),
    Matricula VARCHAR(20),
    Email VARCHAR(255),
    Endereco VARCHAR(255),
);
```
