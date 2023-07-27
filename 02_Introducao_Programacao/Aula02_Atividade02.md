# Introdução à Programação  - Aula 02
## 📄 Atividade 02 - Estruturas e comandos lógicos de decisão
Aluno: Cleverson Guandalin

---
# Determinando a categoria de habilitação, conforme informações do veículo

Características dos veículos:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Categorias de habilitação:
- A: Veículos com duas ou três rodas;
- B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
- C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
- D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas; 
- E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

## #Código em python, para a solução do problema:

```python
quantidade_de_rodas = int(input("Quantas rodas o veículo tem? "))
peso_bruto = int(input("Qual é o peso bruto do veículo em quilogramas? "))
quantidade_de_pessoas = int(input("Quantas pessoas o veículo acomoda? "))

if quantidade_de_rodas <= 3:
  categoria_de_habilitação = "A"
elif quantidade_de_rodas == 4 and peso_bruto <= 3500 and quantidade_de_pessoas <= 8:
  categoria_de_habilitação = "B"
elif quantidade_de_rodas >= 4 and peso_bruto > 3500 and peso_bruto <= 6000:
  categoria_de_habilitação = "C"
elif quantidade_de_rodas >= 4 and quantidade_de_pessoas > 8:
  categoria_de_habilitação = "D"
else:
  categoria_de_habilitação = "E"

print("A categoria de habilitação necessária para o veículo é " + categoria_de_habilitação)
```

---
