# Introdução à Programação  - Aula 02
## 📄 Atividade 03 - Aprender a executar laços de repetição. 
**Aluno:** Cleverson Guandalin

---
# Imprimir números de andares de um hotel


## Solução utilizando o laço for:

```python
for i in range(20, 0, -1):
    if i != 13:
        print(i)
```

## Solução utilizando o laço while

```python
i = 20
while i >= 1:
    if i != 13:
        print(i)
    i -= 1
```

## Solução utilizando o laço do-while (emulate-do-while loop)

```python
i = 20
while True:
    if i != 13:
        print(i)
    i -= 1
    if i < 1:
        break
```

## **Desafio:** Imprimir os números dos andares em ordem decrescente, mas sem imprimir o número 13. Solução utilizando o range()

```python
for i in range(20, 0, -1):
    if i != 13:
        print(i)
```

---
