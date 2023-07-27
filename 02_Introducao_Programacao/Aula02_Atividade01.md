# Introdução à Programação  - Aula 02
## 📄 Atividade 01 - Operadores relacionais - Comparações
Aluno: Cleverson Guandalin

---
# Determinar se a operação é Verdadeira o Falsa

## #1

```python
nota = 10
verificacao = nota <= 10

print(verificacao) # Verdadeiro
```

**Resultado:** A nota é 10, que é igual a 10. Portanto, a afirmação é verdadeira.

## #2

```python
nota = 6
faltas = 4
verificacao = (nota <= 6) and (faltas <= 3)

print(verificacao) # Falso
```

**Resultado:** A nota é 6, que é igual a 6, mas o número de faltas é 4, que é maior do que 3. Portanto, a afirmação é falsa.

## #3

```python
convidados = 3
fumante = False
verificacao = (convidados > 4) or (fumante == True)

print(verificacao) # Falso
```

**Resultado:** O número de convidados é 3, que é menor do que 4, e o fumante é falso. Portanto, a afirmação é falsa.

## #4

```python
dia = "qua"
verificacao = (dia == "sab") or (dia == "dom")

print(verificacao) # Falso
```

**Resultado:** O dia é "qua", que é diferente de "sab" e "dom". Portanto, a afirmação é falsa.

## #5

```python
feriado = True
verificacao = not(feriado == False)

print(verificacao) # Verdadeiro
```

**Resultado:** Feriado é verdadeiro, então a negação de "feriado é falso" é verdadeira. Portanto, a afirmação é verdadeira.

## #6

```python
dia = "ter"
feriado = False
verificacao = (dia == "seg") or not(feriado == False)

print(verificacao) # Falso
```

**Resultado:** O dia é "ter", que é diferente de "seg", e o feriado é falso. A negação de "feriado é falso" é verdadeira, mas isso não importa porque a primeira condição é falsa. Portanto, a afirmação é falsa.

---
