# HTML/CSS  - Aula 02
## 📄 Atividade 03 - Aprender como criar uma página por completo, utilizando HTML. 
**Aluno:** Cleverson Guandalin

---
# Marco Zero - Recife
Este projeto consiste na criação de uma nova página para complementar o conteúdo sobre o Marco Zero, um ponto turístico famoso localizado na cidade do Recife, no estado de Pernambuco. A nova página, intitulada "Recife Antigo", apresenta dois outros pontos turísticos de destaque nessa região histórica. Os pré-requisitos para a criação dessa página são:

- Criar um link na página principal que direcione para a página "Recife Antigo".
- Adicionar imagens representativas dos lugares mencionados.


## Código do arquivo recife_antigo.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recife Antigo</title>
</head>
<body>
    <header>
        <h1>Recife Antigo</h1>
    </header>

    <main>
        <section>
            <h2>Cais do Sertão</h2>
            <p>O Cais do Sertão é um museu interativo localizado no Recife Antigo. Ele conta a história e a cultura do sertão nordestino, homenageando artistas e personalidades importantes da região. O museu oferece exposições, apresentações musicais e atividades educativas.</p>
            <img src=".\assets\images\cais_do_sertao.jpg" width="500" alt="Imagem do Cais do Sertão">
        </section>

        <section>
            <h2>Ponte Maurício de Nassau</h2>
            <p>A Ponte Maurício de Nassau é uma das principais atrações do Recife Antigo. Ela é uma ponte basculante que cruza o Rio Capibaribe e conecta a região central da cidade ao bairro de Santo Antônio. A ponte é um marco histórico e um símbolo da engenharia do século XIX.</p>
            <img src=".\assets\images\ponte_mauricio_nassau.jpg" width="500" alt="Imagem da Ponte Maurício de Nassau">
        </section>

        <section>
            <h2>Voltar à página principal</h2>
            <p><a href="index.html">Clique aqui</a> para retornar à página principal do Marco Zero - Recife.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Recife Antigo. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```
## Código da section "Pontos Turísticos do Recife Antigo" no arquivo index.html
```html
    <section>
        <h2>Pontos Turísticos do Recife Antigo</h2>
        <p>Conheça outros pontos turísticos encantadores do Recife Antigo.</p>
        <a href="recife_antigo.html">Saiba mais</a>
    </section>
```


## Capturas de tela da página
### Link na página inicial
<img src=".\MarcoZero.png" width=800 alt="Link página Recife Antigo">

### Página sobre o Recife Antigo
<img src=".\RecifeAntigoIndex.png" width=800 alt="Recife Antigo">