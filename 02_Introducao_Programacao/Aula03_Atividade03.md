# Introdução à Programação  - Aula 03
## 📄 Atividade 03 - Contornar problemas previstos no sistema. 
**Aluno:** Cleverson Guandalin

---
# Programa que calcula a idade do usuário em 2022
Este é um programa em Python que recebe do usuário o nome completo e o ano de nascimento, e calcula a idade do usuário em 2022. O programa só aceita anos de nascimento entre 1922 e 2021. Caso o usuário informe um valor inválido ou não numérico, o programa informará o erro e continuará perguntando até que um valor correto seja preenchido.

## Código em Python
```python
while True:
    nome_completo = input("Digite o nome completo: ")
    ano_nascimento_str = input("Digite o ano de nascimento (entre 1922 e 2021): ")
    try:
        ano_nascimento = int(ano_nascimento_str)
    except ValueError:
        print("Ano de nascimento inválido. Por favor, tente novamente.")
        continue

    if ano_nascimento < 1922 or ano_nascimento > 2021:
        print("Ano de nascimento fora do intervalo válido. Por favor, tente novamente.")
        continue

    idade = 2022 - ano_nascimento
    print(f"Olá, {nome_completo}! Você completou ou completará {idade} anos em 2022.")
    break
```

## Como usar o programa

1. Execute o programa em um ambiente Python.
2. O programa solicitará que você informe o nome completo e o ano de nascimento.
3. Digite o nome completo e o ano de nascimento.
4. O programa calculará a idade do usuário em 2022.
5. Se o ano de nascimento informado não estiver dentro do intervalo válido (1922 a 2021), o programa informará o erro e continuará perguntando até que um valor correto seja preenchido.
6. O programa imprimirá uma mensagem ao usuário, incluindo seu nome completo e idade em 2022.
---
