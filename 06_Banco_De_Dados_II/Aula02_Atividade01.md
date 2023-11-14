# Banco de Dados II - Aula 02
## 📄 Atividade 01 - Entender a funcionalidade de uma Procedure e aplicá-la no dia a dia.  
Aluno: Cleverson Guandalin

---
# Procedure

O seguinte procedure pode ser usado para gerar um relatório diário da quantidade de produtos comprados por dia:

```sql
DELIMITER $$

CREATE PROCEDURE get_relatorio_vendas_diarias()
BEGIN

  -- Declara os parâmetros do procedimento
  DECLARE
    data_hoje DATE;

  -- Obtém a data atual
  SET data_hoje = CURRENT_DATE();

  -- Realiza a consulta para obter a quantidade de produtos comprados por dia
  SELECT
    SUM(quantidade) AS quantidade_comprada,
    produto.nome AS produto
  FROM
    vendas
    INNER JOIN produto ON vendas.produto_id = produto.id
  WHERE
    vendas.data = data_hoje
  GROUP BY
    produto.nome;

END $$

DELIMITER ;
```

Este procedure tem os seguintes parâmetros:

* `data_hoje`: A data atual.

O procedure funciona da seguinte forma:

1. Declara os parâmetros do procedure.
2. Obtém a data atual.
3. Realiza a consulta para obter a quantidade de produtos comprados por dia.
4. Retorna o resultado da consulta.

Para chamar o procedure, podemos usar o seguinte comando:

```sql
CALL get_relatorio_vendas_diarias();
```

O resultado da consulta será um conjunto de linhas, cada uma com a quantidade de produtos comprados de um produto específico. O exemplo a seguir mostra o resultado da consulta para uma data específica:

```
quantidade_comprada | produto
-------------------- | --------
10                  | Caneta
20                  | Lápis
30                  | Borracha
```

