const titulo = document.getElementById('titulo')
titulo.innerText = 'Atividade Usando innerText'

const link = document.querySelector('a')
link.innerText = 'Proz Educação'

const listaNaoOrdenada = document.querySelector('ul')
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>'

const listaOrdenada = document.getElementById('lista-ordenada')
listaOrdenada.innerHTML =
  "<li><a href='https://prozeducacao.com.br'>Proz Educação</a></li><li><a href='https://www.linkedin.com/in/cleversonguandalin/'>Meu LinkedIn</a></li><li><a href='https://github.com/CleverGnd'>Meu GitHub</a></li>"
