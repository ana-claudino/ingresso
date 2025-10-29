//selecionar qual ingresso
//inserir quantidade
//botão funcionar
//deduzir o número de ingressos comprados do total
//não poder comprar quando tiver 0 - quando o número de ingressos inserido for maior que o número disponível


function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipoDeIngresso == 'pista') {
    comprarPista(qtd);
    } else if (tipoDeIngresso == 'superior') {
    comprarSuperior(qtd);
    } else {
    comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
    alert('Quantidade indisponível para tipo pista');
    } else {
    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
    alert('Quantidade indisponível para tipo superior');
    } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
    alert('Quantidade indisponível para tipo inferior');
    } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('Compra realizada com sucesso!');
    }
}