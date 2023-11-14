# Banco de Dados I - Aula 01
## 📄 Atividade 03 - Normalizar um esquema de banco de dados 
Aluno: Cleverson Guandalin

---
# Primeira Forma Normal (1FN)

![Imagem do banco de dados](/05_Banco_De_Dados_I/Imagem01_Atividade03_BancodeDadosI.png)

A tabela não está na 1FN porque a coluna ENDEREÇO contém dados compostos. O endereço de uma pessoa é composto de vários atributos, como logradouro, bairro, cidade, estado e CEP. Esses atributos devem ser separados em colunas distintas.

A tabela normalizada na 1FN ficaria assim:


| IDENTIFICADOR | NOME     | TELEFONE      | LOGRADOURO | BAIRRO | CIDADE | ESTADO | CEP       |
|---------------|----------|---------------|------------|--------|--------|--------|-----------|
|               |          |               |            |        |        |        |           |

Exemplo de normalização

Vamos considerar a seguinte tupla da tabela original:


| IDENTIFICADOR | NOME     | TELEFONE      | ENDEREÇO                            |
|---------------|----------|---------------|-------------------------------------|
| 01            | Reinaldo | 68 0945-8723 | Rua 10, 34, São Paulo, SP, 12345-000 |


Após a normalização, essa tupla ficaria assim:

| IDENTIFICADOR | NOME     | TELEFONE      |
|---------------|----------|---------------|
| 01            | Reinaldo | 68 0945-8723 |


A coluna ENDEREÇO foi dividida em quatro colunas distintas:

- LOGRADOURO
- BAIRRO
- CIDADE
- ESTADO

Cada uma dessas colunas agora contém apenas um valor por registro. Portanto, a tabela está na 1FN.
