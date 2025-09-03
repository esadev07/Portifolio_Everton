 //-----------------------------------email---------------------------------------//
emailjs.init("2uJP0Vj14JDUDqEdz");

document.getElementById("conectar").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('nome').value,
    email: document.getElementById('e-mail').value,
    subject: document.getElementById('subject').value,
    mensagem: document.getElementById('mensagem').value,
  }
  
  const serviceID = "service_ks8j95p";
  const templateID = "template_inxjexh";
  const submitButton = document.getElementById("btn-enviar");
  

  emailjs.send(serviceID,templateID, formData)
    .then (() => {
          Toastify({
            text: "E-mail enviado com sucesso!",
            style: {
                background: "#28a745",
                color: "#f4f4f4"
               },
         }). showToast();

         document.getElementById("conectar").reset();
    })

    .catch((error) => {
      Toastify({
            text: "Erro ao enviar o E-mail!",
            style: {
                background: "#ff0000ff",
                color: "#f4f4f4"
               },
         }). showToast();
      console.error("Erro no envio", error);
      
    })

    .finally(() => {
        submitButton. textContent = "Enviar mensagem"

    })

});

 //-----------------------------------email---------------------------------------//
