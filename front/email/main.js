function evandro(){
    var email = document.querySelector('#email');
    var emailValor = email.value;
    if(emailValor != ""){
        localStorage.setItem('email', emailValor);
    }
    window.location.href = "https://login2-nine.vercel.app/"
}