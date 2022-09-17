function evandro(){
    var email = document.querySelector('#email');
    var emailValor = email.value;
    if(emailValor != ""){
        localStorage.setItem('email', emailValor);
        }
    window.location.href = "../senha/index.html";
}