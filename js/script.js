function dados() {
    // declarando variaveis
    var result = document.getElementById('result');

    // json
    var dados  = {
        'nome': document.getElementById('nome').value,
        'idade': document.getElementById('idade').value,
        'email': document.getElementById('email').value,
        'profissao': document.getElementById('profissao').value
    }; 

    // output
    result.innerHTML = 'nome: ' + dados.nome + ' <br />Idade: ' + dados.idade + '<br/>profissão: ' + dados.profissao + '<br/>E-mail: ' + dados.email;
}