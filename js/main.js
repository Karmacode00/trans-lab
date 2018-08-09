// Iniciar y registrar 
window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        //Si estamos logueados

        console.log("User > "+JSON.stringify(user));
        {window.location="perfil.html"}
        alert("Bienvenido(a)")
      }else{
        //No estamos logueados

        console.log('Usuario no logeado');
        // alert("Iniciar Sesión")    
      }
    });

}

    function register() {
        const emailValue = email.value;
        const passwordValue = password.value;
        firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
          .then(()=>{
            console.log("Usuario registrado");
            {window.location="perfil.html"}
          })
          .catch((error)=>{
            console.log("Error de firebase > "+error.code);
            console.log("Error de firebase, mensaje > "+error.message);
          });
        }
      
      function login() {
        const emailValue = email.value;
        const passwordValue = password.value;
        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
          .then(()=>{
            console.log("Usuario con login exitoso")
            {window.location="perfil.html"}
          })
          .catch(()=>{
            console.log("Error de firebase > "+error.code);
            console.log("Error de firebase, mensaje > "+error.message);
          });
        }
    

// Guardar tarjetas para caada usuario

  firebase.database().ref('tarjetas')
  .limitToLast(6)
  .once('value')
  .then((messages)=>{
    console.log("Tarjetas > "+JSON.stringify(messages));
  })
  .catch(()=>{

  })

    // Nuevos mensajes usando evento on child_added
    firebase.database().ref('tarjetas')
    .limitToLast(1)
    .on('child_added', (newCard)=>{
      cardContainer.innerHTML +=`
        <p>${newCard.val().text}</p>`;
    })


// Usaremos una colección para guardar los mensajes, llamada messages
function sendCard(){
    const currentUser = firebase.auth().currentUser;
    const  cardNumber = tarjeta.value;
  
    // Para tener una nueva llave en la colección messages
    const newCardKey = firebase.database().ref().child('tarjetas').push().key;
  
    firebase.database().ref(`tarjetas/${newCardKey}`).set({
      creator : currentUser.uid,
      creatorName : currentUser.displayName,
      cardNumber : cardNumber,
    });
  }



/*

function validatePassword(fld) {
  var error = "";
  var illegalChars = /[\W_]/; // allow only letters and numbers

  if (fld.value == "") {
      fld.style.background = 'Yellow';
      error = "You didn't enter a password.\n";
      alert(error);
      return false;

  } else if ((fld.value.length < 1) || (fld.value.length > 8)) {
      error = "The password is the wrong length. \n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else if (illegalChars.test(fld.value)) {
      error = "The password contains illegal characters.\n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else {
      fld.style.background = 'White';
  }
 return true;
} */