function carregarProduto(dados) {
    var conteudoPrincipal = document.getElementById("principal");
    var htmlProduto = "";

    for (let i = 0; i < dados.length; i++) {
        products.push(dados[i])
    }

    if (products.length == 0) {
        stringProduto = ""
        stringProduto += ""
    }
    else {
        for (let i = 0; i < products.length; i++) {
            var produtoAtual = products[i];
            var cartaoProduto =
                `<article class="card mx-2 my-1 p-2 col-md-3 col-sm-12" >
                            <div class="dadosFilme flex-wrap">
                                <img src="${produtoAtual.image}" class="card-img-top" alt="${produtoAtual.title}">
                                <div class="card-body">
                                    <h5 class="card-title"><a href="./detalhes.html?id=${produtoAtual.id}">${produtoAtual.title}</a></h5>
                                    <p class="card-text generos">Gêneros: ${produtoAtual.gender}</p>
                                    
                                </div>
                            </div>
                        </article>`;
            htmlProduto += cartaoProduto;
        }
    }
    conteudoPrincipal.innerHTML += htmlProduto;
}
function carregarProdutoDestaque(dadosDestaque) {
    var conteudoDestaque = document.getElementById("destaque");
    var htmlProdutoDestaque = "";

    for (let i = 0; i < dadosDestaque.length; i++) {
        productsDestaque.push(dadosDestaque[i])
    }
    for (let i = 0; i < productsDestaque.length; i++) {
        var produtoAtual = productsDestaque[i];
        var cartaoProdutoDestaque =
            `<article class="card mx-2 my-1 p-2 col-md-12 col-sm-12" >
                            <div class="dadosProduto flex-wrap">
                                <img src="${produtoAtual.image}" class="card-img-top" alt="${produtoAtual.title}" >
                                <div class="card-body">
                                    <h5 class="card-title"><a href="./detalhes.html?id=${produtoAtual.id}">${produtoAtual.title}</a></h5>
                                    <p class="card-text generos">Gêneros: ${produtoAtual.gender}</p>
                                    
                                </div>
                            </div>
                        </article>`;
        htmlProdutoDestaque += cartaoProdutoDestaque;
    }
    conteudoDestaque.innerHTML += htmlProdutoDestaque;
}



function limparFormulario() {
    var areaTexto = document.getElementById("nomeProdutoFiltro");
    areaTexto.value = "";
}


function filtro() {
    var textoParaFiltrar = document.getElementById("nomeProdutoFiltro").value;
    if (textoParaFiltrar.length > 0) {
        fetch('https://diwserver.vps.webdock.cloud/products/search?query=' + textoParaFiltrar)
            .then(response => response.json())
            .then(dados => filtrar(dados))
    }
}

function filtrar(dados) {
    var htmlProduto = "";
    limparFormulario();

    var conteudoPrincipal = document.getElementById("principal");
    conteudoPrincipal.innerHTML = ``;

    console.log(dados)

    for (let i = 0; i < dados.length; i++) {
        products.push(dados[i])
    }

    if (products.length == 0) {
        stringProduto = "<h1 class='text-center mt-5'> Nada por aqui ainda! </h1>"
        stringProduto += "<h1 class='text-center' m-auto> Que tal começar cadastrando? ➡️ </h1>"
    }
    else {
        for (let i = 0; i < products.length; i++) {
            var produtoAtual = products[i];
            var cartaoProduto =
                `<article class="card mx-2 my-1 p-2 col-md-3 col-sm-12" >
                            <div class="dadosFilme flex-wrap">
                                <img src="${produtoAtual.image}" class="card-img-top" alt="${produtoAtual.title}">
                                <div class="card-body">
                                    <h5 class="card-title"><a href="./detalhes.html?id=${produtoAtual.id}">${produtoAtual.title}</a></h5>
                                    <p class="card-text generos">Gêneros: ${produtoAtual.gender}</p>
                                    
                                </div>
                            </div>
                        </article>`;
            htmlProduto += cartaoProduto;
        }
    }

    conteudoPrincipal.innerHTML = htmlProduto;
}

function buscarNoServidor() {
    fetch('https://diwserver.vps.webdock.cloud/products?page=100&page_items=12')
        .then(response => response.json())
        .then(dados => carregarProduto(dados.products))
}

function buscarNoServidorDestaque() {
    fetch('https://diwserver.vps.webdock.cloud/products?page=10&page_items=4')
        .then(response => response.json())
        .then(dadosDestaque => carregarProdutoDestaque(dadosDestaque.products))
}

window.onload = buscarNoServidor()
window.onload = buscarNoServidorDestaque()
