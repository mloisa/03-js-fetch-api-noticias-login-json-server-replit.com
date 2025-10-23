function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    let usuario = lerUsuario(emailInformado);

    if (emailInformado === usuario.email) {
        // alert("E-mail informado corretamente!");
        if (senhaInformada === usuario.senha) {
            // alert("Senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("Senha informada incorretamente!")
    } else
        alert("E-mail informado incorretamente!");
}

async function lerUsuario(email) {
    const replit = 'https://40c62aeb-526c-4b4b-810d-54f532c9ceb8-00-xbbxy1ovs6lf.worf.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + `usuarios?email=${email}`;
    let usuario;

    await fetch(url)
        .then(response => response.json())
        .then(json => {
            usuario = { json.email, json.senha }
        })
        .catch(error => console.error(error))

    return usuario;
}