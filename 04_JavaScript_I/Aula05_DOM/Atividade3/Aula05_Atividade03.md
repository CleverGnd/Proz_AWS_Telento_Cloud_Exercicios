# JavaScript I - Aula 05
## 📄 Atividade 03 - Criando elementos no DOM 
Aluno: Cleverson Guandalin

---
# Criando elementos no DOM

Neste exercício, criamos um projeto com dois arquivos: index.html e script.js. O arquivo index.html contém a estrutura base HTML e a tag <script> para conectar o arquivo HTML com o arquivo JavaScript. Não é necessário fazer alterações no arquivo index.html

## Código desenvolvido HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="script.js" defer></script>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

## Código desenvolvido JavaScript:
    
```javascript
let titulo = document.createElement('h1')

titulo.id = 'titulo'
titulo.innerText = 'Polos DOM'

let body = document.querySelector('body')

body.appendChild(titulo)

let produto = document.createElement('div')

produto.innerHTML = `
  <div>
    <h2>Camisa Polo Vermelha</h2>
    <img src="https://www.jardelatacadao.com.br/lojas/00050181/prod/camisa_polo_50_algodao_50_dry_tradicional_jardel_vermelho_jardel_atacadao_000041J.jpg" alt="x-salada">
    <p>Camisa polo vermelha masculina.</p>
    <p id="valor_camisa_vermelha">R$ 99.90</p>
  </div>
`

body.appendChild(produto)
```


---
