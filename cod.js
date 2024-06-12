const form = document.getElementById("form");
const ursername =document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation = document.getElementById("password-confirmation")

form.addEventListener("submit" ,(event)=> {
    event.preventDefault();
    checkForm();
    

})
email.addEventListener("blur" , ()=>{
    checkInputEmail();
})
ursername.addEventListener('blur' ,()=>{
    checkInputUserName();
})
function checkInputUserName(){
    const usernameValue = username.value;

    if(usernameValue===""){
        errorInput(username , "Preencha seu username!")
    }else{
        const formItem =username.parentElement;
        formItem.className ="form-content"

    }
}
function checkInputEmail(){
    const emailValue = email.value;
    if(emailValue ===""){
        errorInput(email , "O email é obrigatório !")
    }else{
        const formItem = email.parentElement ;
        formItem.className ="form-content"
    }
}
function checkInputpassword(){
    const passwordValue = password.value;
  
    if(passwordValue ===""){
        errorInput(password , "A senha  é obrigatório")
    
    }else if(passwordValue.length< 8){
        errorInput( password , "A senha precisa ter no minimo 8 caracteres")

    }else{
        const formItem =password.parentElement;
        formItem.className = "form-content"
    }
}
function checkInputConfirmation(){
    const passwordValue =password.value;
    const confirmationValue = confirmation.value;
    if(confirmationValue  ===""){
        errorInput( confirmation , "Insira sua senha novamente")
    

    }else if(confirmationValue !== passwordValue){
        errorInput( confirmation , "As senhas não são iguais.")

    }else{
        const formItem = confirmation.parentElement ;
        formItem.className ="form-content"

    }
}


function checkForm(){

    checkInputUserName();
    checkInputEmail();
    checkInputpassword();
    checkInputConfirmation();


    const formItems = form.querySelectorAll(".form-content")
    // every passa por todo o array verificando o erro
    const isValid =[...formItems].every((item)=>{
        return item.className ==="form-content"
    });

    if(isValid){
        alert(" CADASTRADO COM SUCESSO !")
    }else{
        alert("PREENCHA TODOS OS DADOS CORRETAMENTE !")
    }
}



function errorInput(input , message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p")

    textMessage.innerText = message;

    formItem.className ="form-content error"
}