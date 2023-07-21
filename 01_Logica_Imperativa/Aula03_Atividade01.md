# Lógica Imperativa - Aula 03
## 📄 Atividade 01 - Alocação de cliente em restaurante
Aluno: Cleverson Guandalin

---
## Algoritmo para descobrir em qual área do restaurante o cliente será alocado

```sh
var
    fumanteOuPet: caractere
    numPessoas: inteiro

inicio
    escreva("Bem-vindo ao restaurante!")

    // perguntar se o grupo tem fumantes ou animais de estimação
    escreva("Algum membro do grupo é fumante ou tem animal de estimação? (S/N) ")
    leia(fumanteOuPet)

    // perguntar quantas pessoas no grupo
    escreva("Quantas pessoas há no grupo? ")
    leia(numPessoas)

    // verificar a área adequada com base nas informações fornecidas
    se (fumanteOuPet == "S") entao
        escreva("Seu grupo precisa ser alocado na área externa.")
    senao
        se (numPessoas >= 5) entao
            escreva("Seu grupo precisa ser alocado no 1º andar.")
    senao
        escreva("Seu grupo pode ser alocado no térreo.")
    fimse
    fimse

    escreva("Obrigado por escolher nosso restaurante!")

fimalgoritmo
```
---