let nameInput = document.getElementById("inputName");
let emailInput = document.getElementById("inputMail");
let mensajeInput = document.getElementById("textArea");
let enviarBTN = document.getElementById("enviarBTN");
let listComments = document.getElementById("listComents");

let addComent = () => {
  let nameText = nameInput.value.trim();
  let mailText = emailInput.value.trim();
  let messageText = mensajeInput.value.trim();

  console.log(nameText);
  console.log(mailText);
  console.log(messageText);

  if (nameText === "" && mailText === "" && messageText === "") {
    alert("Debes introducir almenos un comentario");
    return;
  } else {
    const newMessage = document.createElement("li");
    newMessage.classList.add("coments-items");
    newMessage.innerHTML =
      "<strong>Nombre: </strong>" +
      nameText +
      "<br/><strong>Mail: </strong>" +
      mailText +
      "<br/><strong>Mensaje: </strong>" +
      messageText;
    listComments.appendChild(newMessage);
  }

  nameInput.value = "";
  emailInput.value = "";
  mensajeInput.value = "";
};

enviarBTN.addEventListener("click", addComent);
