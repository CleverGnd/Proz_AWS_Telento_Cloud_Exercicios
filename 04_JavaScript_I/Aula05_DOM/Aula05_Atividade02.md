# JavaScript I - Aula 05
## 📄 Atividade 02 - Template Strings 
Aluno: Cleverson Guandalin

---
# Usando innerText e innerHTML para adicionar conteúdo a elementos HTML

A atividade consiste em acessar o site OneCompiler e criar uma função que recebe dois números como parâmetros. A função deve imprimir no terminal quatro frases utilizando template strings, representando as quatro operações básicas (adição, subtração, multiplicação e divisão) aplicadas aos números fornecidos. Cada frase deve mostrar a operação realizada e o resultado obtido.

## Código desenvolvido JavaScript:
    
```javascript
const titulo = document.getElementById('titulo')
titulo.innerText = 'Atividade Usando innerText'

const link = document.querySelector('a')
link.innerText = 'Proz Educação'

const listaNaoOrdenada = document.querySelector('ul')
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>'

const listaOrdenada = document.getElementById('lista-ordenada')
listaOrdenada.innerHTML =
  "<li><a href='https://prozeducacao.com.br'>Proz Educação</a></li><li><a href='https://www.linkedin.com/in/cleversonguandalin/'>Meu LinkedIn</a></li><li><a href='https://github.com/CleverGnd'>Meu GitHub</a></li>"

```
## Resultado no OneCompiler:

![Resultado no OneCompiler](./aula05_atividade1.jpeg)




---
