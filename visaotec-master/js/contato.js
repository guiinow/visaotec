const button = document.querySelector("#home #teste #button");

function contato() {
    const nomeInput = document.querySelector("input[name=nome]");
    const emailInput = document.querySelector("input[name=email]");
    const assuntoInput = document.querySelector("input[name=assunto]");
    //const mensagemInput = document.querySelector("input[name=mensagem]");

    const response = {
        nome: nomeInput.value,
        email: emailInput.value,
        assunto: assuntoInput.value,
       // mensagem: mensagemInput.value
    }

    return response;
}

button.addEventListener("click", () => {
    let infos = contato();
    console.log(infos);
});


