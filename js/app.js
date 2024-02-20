function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);


    if (tipoIngresso.value == 'pista'){
        comprarPista(qtd);
    }else {
        if (tipoIngresso.value == 'superior'){
            comprarSuperior(qtd);
    }else{
        
            comprarInferior(qtd);
    }

}

}

function comprarPista(qtd) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > quantidadePista){
        alert('a qunatidade esta indisponivel')
    }else {
        quantidadePista = quantidadePista - qtd;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('compra realizado com sucesso!! ');
    }
    
    
}

function comprarSuperior(qtd) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > quantidadeSuperior){
        alert('a qunatidade esta indisponivel')
    }else {
        quantidadeSuperior = quantidadeSuperior - qtd;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('compra realizado com sucesso!! ');
    }
    
    
}

function comprarInferior(qtd) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > quantidadeInferior){
        alert('a qunatidade esta indisponivel')
    }else {
        quantidadeInferior = quantidadeInferior - qtd;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('compra realizado com sucesso!! ');
    }
    
    
}