# HTML/CSS  - Aula 03
## 📄 Atividade 02 - Entender as propriedades básicas do CSS. 
**Aluno:** Cleverson Guandalin

---
# Marco Zero - Recife - Agora com CSS!
Após aprender as propriedades básicas da CSS, foi possível aprimorar a atividade anterior aplicando estilos para a página Marco Zero. As seguintes alterações foram desenvolvidas:

- Definir uma cor de fundo e uma fonte para o corpo da página.
- Definir tamanhos e margens para os elementos de conteúdo.
- Aplicar bordas e espaçamentos para as imagens.
- Definir cores e estilos para os títulos e outros elementos de texto.


## Código do arquivo styles.css
```css
body {
    background-color: #535DA2;
    font-family: 'Boogaloo', cursive;
}

header {
    padding: 1rem;
    align-items: center;
}

main {
    background-color: #14B78A;
    color: #fff;
    padding: 2rem;
}

img {
    border-radius: 1rem;
    margin: 3rem;
}

h1 {
    margin: 1.5rem;
    text-align: center;
    color: #FF9A55;
}

h2 {
    margin: 1rem;
    text-align: center;
    color: #FFEA6C;
}

a {
    text-decoration: none;
    color: #FF6700;
}

p {
    padding: 1rem;
    text-align: justify;
}

footer {
    color: #fff;
    padding: 1rem;
}

/* Common styles */

.container {
    max-width: 960px;
    margin: 0 auto;
}

```

## Capturas de tela da página

### Página Marco Zero, com CSS
<img src=".\RecifeIndexCSS.png" width=800 alt="Recife Antigo">