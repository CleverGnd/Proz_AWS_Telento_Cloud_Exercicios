# Banco de Dados II - Aula 02
## 📄 Atividade 02 - Entender a funcionalidade de uma Function e aplicar no dia a dia.   
Aluno: Cleverson Guandalin

---
# Função	

Função para somar todos os clientes que foram cadastrados na loja durante um dia:

```sql
CREATE FUNCTION get_clientes_cadastrados_dia()
RETURNS INT
BEGIN

  -- Declara os parâmetros do procedimento
  DECLARE
    dia DATE;

  -- Obtém o dia atual
  SET dia = CURRENT_DATE();

  -- Realiza a consulta para obter o número de clientes cadastrados no dia
  SELECT
    COUNT(*) AS total_clientes
  FROM
    cliente
  WHERE
    cadastro = dia;

END;
```

Esta função tem o seguinte parâmetro:

* `dia`: O dia para o qual deseja-se obter o número de clientes cadastrados.

O function funciona da seguinte forma:

1. Declara os parâmetros do function.
2. Obtém o dia atual.
3. Realiza a consulta para obter o número de clientes cadastrados no dia.
4. Retorna o resultado da consulta.

Para chamar o function, podemos usar o seguinte comando:

```sql
SELECT get_clientes_cadastrados_dia();
```

O resultado da consulta será um número inteiro, que representa o número de clientes cadastrados no dia especificado.

Por exemplo, se o dia atual for 2023-11-15, a consulta retornará o seguinte resultado:

```
total_clientes
------------
10
```
