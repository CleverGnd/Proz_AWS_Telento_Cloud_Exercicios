# Banco de Dados I - Aula 01
## 📄 Atividade 02 - Modelar banco dados relacionais: Conceito relacional, lógico e físico 
Aluno: Cleverson Guandalin

---
# Projeto Conceitual de Bancos de Dados

Criação de um projeto conceitual de banco de dados, utilizando uma entidade com atributos simples.

**Entidade:** Cliente

**Atributos:**

 - Nome: simples, obrigatório, texto
 - Endereço: composto, opcional, texto
   - Rua: simples, obrigatório
   - Número: simples, obrigatório
   - Bairro: simples, obrigatório
   - Cidade: simples, obrigatório
   - Estado: simples, obrigatório
   - CEP: simples, obrigatório
 - Telefones: multivalorado, opcional, texto

**Descrição:**

A entidade Cliente representa uma pessoa física ou jurídica que utiliza os serviços da empresa.

**Atributos simples:**

Nome: é um atributo simples porque representa uma informação única e indivisível.
Telefones: é um atributo simples porque representa uma informação única e indivisível.

**Atributos compostos:**

Endereço: é um atributo composto porque representa um conjunto de informações relacionadas.

**Atributos multivalorados:**

Telefones: é um atributo multivalorado porque pode ter mais de um valor.

## Exemplo:

```sql
Cliente
Nome: João da Silva
Endereço:
  Rua: Rua da Paz
  Número: 123
  Bairro: Centro
  Cidade: São Paulo
  Estado: SP
  CEP: 01234-5678
Telefones:
  (11) 9999-9999
  (11) 8888-8888
```