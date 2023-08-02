# Introdução à Programação  - Aula 03
## 📄 Atividade 02 - Realizar entrada e saída de dados do usuario. . 
**Aluno:** Cleverson Guandalin

---
# Calculadora de operações básicas em Python
Este é um programa em Python que implementa uma calculadora de operações básicas. Ele permite que o usuário insira dois valores e escolha uma das quatro operações disponíveis: soma, subtração, multiplicação e divisão. O programa também imprime as operações disponíveis para facilitar a escolha do usuário.

## Código em Python

```python
def calculadora():
    while True:
        print("1: Soma")
        print("2: Subtração")
        print("3: Multiplicação")
        print("4: Divisão")
        print("0: Sair")
        
        opcao = input("Digite o número da operação desejada: ")
        
        if opcao == "0":
            print("Saindo...")
            break
        elif opcao in ["1", "2", "3", "4"]:
            num1 = float(input("Digite o primeiro valor: "))
            num2 = float(input("Digite o segundo valor: "))
            
            if opcao == "1":
                resultado = num1 + num2
                print("Resultado: ", resultado)
            elif opcao == "2":
                resultado = num1 - num2
                print("Resultado: ", resultado)
            elif opcao == "3":
                resultado = num1 * num2
                print("Resultado: ", resultado)
            elif opcao == "4":
                if num2 != 0:
                    resultado = num1 / num2
                    print("Resultado: ", resultado)
                else:
                    print("Erro: Divisão por zero!")
        else:
            print("Essa opção não existe")

calculadora()
```

## Como usar a calculadora

1. Execute o programa em um ambiente Python.
2. O programa exibirá o seguinte menu de opções:
``` bash
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair
``` 
3. Digite o número correspondente à operação desejada.
4. Se você escolher uma das operações (1, 2, 3 ou 4), o programa solicitará que você insira os dois valores numéricos.
5. Após inserir os valores, o programa executará a operação selecionada e exibirá o resultado na tela.
6. Você pode continuar executando operações enquanto desejar. Para sair do programa, digite 0 e pressione Enter.
7. Se você escolher uma opção inválida, o programa exibirá a mensagem "Essa opção não existe" e retornará ao menu de opções.
---
