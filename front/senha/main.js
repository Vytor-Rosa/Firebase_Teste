const email = localStorage.getItem('email');

function pegar(){
    document.querySelector('#emailPessoa').append(email);
}

function cadastrar(){
    const senha = document.querySelector('#senha');
    const valorSenha = senha.value;
    fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        body: JSON.stringify({email: email, senha: valorSenha}),
        headers: {'Content-Type': 'application/json'}})
}