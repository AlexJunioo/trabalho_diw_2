function detalharProduto(idProduto){
    
    let requisicao = 'https://diwserver.vps.webdock.cloud/products/'+idProduto
    fetch(requisicao)
    .then(resposta => resposta.json())
    .then(dados => mostrar(dados))
   
}

function mostrar(produtoAtual){
    var conteudoPrincipal = document.getElementById("principal");
    var htmlProduto = "";
    
    var cartaoProduto = 
                    `<article class="card mx-2 my-1 p-2 w-100" >
                        <div class="dadosFilme flex-wrap">
                            <img src="${produtoAtual.image}" class="card-img-top" alt="${produtoAtual.title}">
                            <div class="card-body">
                                <h5 class="card-title"><a href="./detalhes.html?id=${produtoAtual.id}">${produtoAtual.title}</a></h5>
                                <p class="card-text generos">Gêneros: ${produtoAtual.gender}</p>
                                <p class="card-text generos">País de origem: ${produtoAtual.price}</p>
                                <p class="card-text sinopse">${produtoAtual.description}</p>
                            </div>
                        </div>
                    </article>`;
        htmlProduto += cartaoProduto;
    
    conteudoPrincipal.innerHTML += htmlProduto;    
}

window.onload = () =>{
    let idParametro = new URLSearchParams(window.location.search);
    let identificador = idParametro.get("id");
    detalharProduto(identificador);
}
