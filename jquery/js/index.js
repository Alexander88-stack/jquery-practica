console.log('Hola mundo!')

// Funcion para colectar los datos 

      function getDataOfFormElement(idOfElment) {
            let objectCapture = document.getElementById(idOfElment);
            //console.log(objectCapture);
            return objectCapture;
      }

      // botonElement.addEventListener('click',function(){
         
      // })


let boton = document.getElementById('botonComprar');

boton.addEventListener('click', () => {
      


      let nameElement = getDataOfFormElement('name').value;
      let usernameElement = getDataOfFormElement('username').value;
      let userMailElement = getDataOfFormElement('usermail').value;
      let fullAderess = getDataOfFormElement('adresscountry').value;
      let codigoPostal = getDataOfFormElement('zipcode').value;
      let cardDate = getDataOfFormElement('Credid card').value;
      let debitCard = getDataOfFormElement('Debit card').value;
      let cardPass = getDataOfFormElement('creditcardpass').value;
      let numberPass = getDataOfFormElement('numbercard').value;
      console.log(nameElement.value+usernameElement.value+userMailElement.value+fullAderess.value+codigoPostal.value+cardDate.value+ debitCard.value+cardPass.value+ numberPass.value);
      let boton = document.getElementById('botonComprar');
      console.log(boton);

      // 1. Tiene que ocultar todos los campos del formulario --> display: none
      const formContainer = document.getElementsByClassName('contenedorPrincipal')[0];
      formContainer.classList.add('hide');

      const confirmationDiv = document.getElementsByClassName('confirmation')[0];
      // Pintar o poner todas las variables con los campos 
      confirmationDiv.classList.add('show');
      document.getElementById("names").innerText = nameElement;
      document.getElementById("users").innerText = usernameElement;
      document.getElementById("mails").innerText = userMailElement;
      document.getElementById("direction").innerText = fullAderess;
      //document.getElementById("country").innerText =
      document.getElementById("zipcode").innerText = codigoPostal;
      document.getElementById("cardname").innerText = cardPass;
      document.getElementById("numbercard").innerText = numberPass;
      document.getElementById("credits").innerText = cardDate;
      // 2. Tiene que mostrar elmensaje de confirmación con los datos del formulario
});



