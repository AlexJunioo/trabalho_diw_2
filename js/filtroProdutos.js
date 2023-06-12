function carregarProduto(dados) {
    var conteudoPrincipal = document.getElementById("principal");
    var htmlProduto = "";

    for (let i = 0; i < dados.length; i++) {
        products.push(dados[i])
    }

    if (products.length == 0) {
        stringFilmes = "<h1 class='text-center mt-5'> Nada por aqui ainda! </h1>"
        stringFilmes += "<h1 class='text-center' m-auto> Que tal começar cadastrando? ➡️ </h1>"
    }
    else {
        for (let i = 0; i < products.length; i++) {
            var produtoAtual = products[i];
            var cartaoProduto =
                `<article class="card mx-2 my-1 p-2 col-md-5 col-sm-12" >
                            <div class="dadosFilme flex-wrap">
                                <img src="${produtoAtual.image}" class="card-img-top" alt="${produtoAtual.title}" max-width="200px">
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

function limparFormulario() {
    var areaTexto = document.getElementById("nomeProdutoFiltro");
    areaTexto.value = "";
}


function filtro() {
    var textoParaFiltrar = document.getElementById("nomeProdutoFiltro").value;
    if (textoParaFiltrar.length > 0){
        fetch('https://diwserver.vps.webdock.cloud/products/search?query=' + textoParaFiltrar)
        .then(response => response.json())
        .then(dados => filtrar(dados))
    }
}

function filtrar(dados) {
    var conteudoPrincipal = document.getElementById("principal");
    conteudoPrincipal.innerHTML = ``;

    var htmlProduto = "";
    limparFormulario();

    console.log(dados)

    for (let i = 0; i < dados.length; i++) {
        products.push(dados[i])
    }

    if (products.length == 0) {
        stringFilmes = "<h1 class='text-center mt-5'> Nada por aqui ainda! </h1>"
        stringFilmes += "<h1 class='text-center' m-auto> Que tal começar cadastrando? ➡️ </h1>"
    }
    else {
        for (let i = 0; i < products.length; i++) {
            var produtoAtual = products[i];
            var cartaoProduto =
                `<article class="card mx-2 my-1 p-2 col-md-5 col-sm-12" >
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

function buscarNoServidor() {
    fetch('https://diwserver.vps.webdock.cloud/products?page=100&page_items=10')
        .then(response => response.json())
        .then(dados => carregarProduto(dados.products))
}

window.onload = buscarNoServidor()
