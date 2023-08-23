# #  HTML/CSS  - Aula 02
## 📄 Atividade 01 - Entender como criar o corpo de uma página. . 
**Aluno:** Cleverson Guandalin

---
# EuroAdventures - Lugares Turísticos na Europa
Este projeto consiste na criação de uma página sobre lugares turísticos na Europa, utilizando HTML e CSS. A página apresenta informações sobre destinos encantadores para conhecer, como Londres, Paris e Roma.

## Funcionalidades
- Apresentação de informações sobre cada destino turístico, incluindo uma imagem ilustrativa e uma breve descrição.
  
- Navegação entre diferentes seções da página por meio de um menu de navegação.

## Código do arquivo index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EuroAdventures - Lugares Turísticos na Europa</title>
</head>
<body>
    <header>
        <span>
            <img src=".\assets\images\EuroAdventures-logo.png" width=150 alt="EuroAdventures" title="EuroAdventures">
            <h1>EuroAdventures</h1>
        </span>
        <nav>
            <ul>
                <li><a href="subpagina1.html">Passagens</a></li>
                <li><a href="subpagina2.html">Hospedagem</a></li>
                <li><a href="subpagina3.html">Pontos turísticos</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h1>EuroAdventures - Lugares Turísticos na Europa</h1>
        <h2>Destinos encantadores para conhecer</h2>

        <section>
            <h3>Londres, Reino Unido</h3>
            <div class="card">
                <img src=".\assets\images\londres01.jpg" width=300 alt="Londres">
                <p>Londres é uma cidade fascinante com uma rica história e uma mistura de culturas. Conheça o famoso Palácio de Buckingham, a Torre de Londres, o Big Ben e muito mais.</p>
            </div>
        </section>

        <section>
            <h3>Paris, França</h3>
            <div class="card">
                <img src=".\assets\images\paris01.jpg" width=300 alt="Paris">
                <p>Paris é conhecida como a cidade do amor e é famosa por seus pontos turísticos icônicos, como a Torre Eiffel, o Louvre e a Catedral de Notre-Dame.</p>
            </div>
        </section>

        <section>
            <h3>Roma, Itália</h3>
            <div class="card">
                <img src=".\assets\images\roma01.jpg" width=300 alt="Roma">
                <p>Roma é uma cidade repleta de história e arte. Visite o Coliseu, o Vaticano, a Fontana di Trevi e desfrute da deliciosa culinária italiana.</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 EuroAdventures - Lugares Turísticos na Europa. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

## Capturas de tela da página
### Página inicial

![Página inicial EuroAdventures](.\EuroAdventuresIndex.png)
---
