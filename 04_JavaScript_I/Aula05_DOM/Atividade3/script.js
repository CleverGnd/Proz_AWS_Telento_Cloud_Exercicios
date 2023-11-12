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
