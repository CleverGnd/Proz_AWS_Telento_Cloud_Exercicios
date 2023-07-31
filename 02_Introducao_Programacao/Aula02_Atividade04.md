# Introdução à Programação  - Aula 03
## 📄 Atividade 01 - Executar funções de códigos. 
**Aluno:** Cleverson Guandalin

---
# Calculadora de operações básicas em Python
Este é um programa em Python que implementa uma calculadora de operações básicas. Ele permite que o usuário insira dois valores e escolha uma das quatro operações disponíveis: soma, subtração, multiplicação e divisão. O programa também imprime as operações disponíveis para facilitar a escolha do usuário.

## Código em Python

```python
def calculadora(num1, num2, operacao):
    if operacao == 1:
        return num1 + num2
    elif operacao == 2:
        return num1 - num2
    elif operacao == 3:
        return num1 * num2
    elif operacao == 4:
        if num2 != 0:
            return num1 / num2
        else:
            print("Erro: divisão por zero.")
            return 0
    else:
        print("Operação inválida.")
        return 0

# Recebe os valores a serem utilizados
valor1 = float(input("Digite o primeiro valor: "))
valor2 = float(input("Digite o segundo valor: "))

# Imprime as operações disponíveis
print("Operações disponíveis:")
print("1. Soma")
print("2. Subtração")
print("3. Multiplicação")
print("4. Divisão")

op = int(input("Escolha a operação desejada (1 a 4): "))
resultado = calculadora(valor1, valor2, op)
print("Resultado da operação:", resultado)
```

---
