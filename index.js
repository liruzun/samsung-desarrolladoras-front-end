const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");


function setError(element, errorMessage) {
  const parent = element.parentElement;
  const id = element.id;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success"); //saca success si ya está para que no se muestren ambas
  }
  parent.classList.add("error"); //defino constantes para reemplazar los parrafos predefinidos de acuerdo al error
  const paragraph = document.getElementById(`${id}-message`);//concatenacion id y message
  paragraph.textContent = errorMessage;

}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error")//saca error si ya está para que no se muestren ambas
  }
  parent.classList.add("success");
}


//funcion validacion de email (ya que no es required en HTML por default para poder correr el script)
function isEmailValid(email) {
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
}


function validateForm() {
  let countError = false;
  

  //username
  if (username.value.trim() == "") {
    setError(username, "Rellene este campo");
    countError=true
  }
  else {
    setSuccess(username);
  }
  
  //email
  if (email.value.trim() == "") {
    setError(email, "Rellene este campo");
    countError=true
  }
  else if (!isEmailValid(email.value)) {
    setError(email, "Email Inválido");
    countError=true
  } else {
    setSuccess(email);
  }

  //clave
  if (password.value.trim() == "") {
    setError(password, "Rellene este campo");
    countError=true
  }
  else if (password.value.trim().length < 8) {
    setError(password, "Debe tener más de 8 caracteres");
    countError=true
  } else {
    setSuccess(password);
  }

  //confirmacion clave
  if (confirm_password.value.trim() == "") {
    setError(confirm_password, "Rellene este campo");
    countError=true
  }
  else if (confirm_password.value !== password.value) {
    setError(confirm_password, "Las contraseñas no coinciden");
    countError=true
  }
  else if (confirm_password.value == password.value) {
    setSuccess(confirm_password);
  }

return !countError


}

//Es mejor definir las funciones antes de usarlas
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(validateForm()){
    alert("La inscripción ha sido correcta");
    form.submit();
  }
})
