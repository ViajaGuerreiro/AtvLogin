function acessoUsu() {
    var usu = document.getElementById("cxlog").value;
    var sen = document.getElementById("cxsen").value;
    var tentativas = 4;

    while(--tentativas >= 0) {
        if(usu == "Thiago" && sen == "1234") {
            alert("Usuario logado");
            tentativas = -1;
        }
        else {
            if(tentativas == 0) {
                alert("Acesso Negado!!! Limite de tentativas atingido");
                document.addEventListener("DOMContentLoaded", function(event) {
                    document.getElementById("cxlog").disabled = true;
                    document.getElementById("cxsen").disabled = true;
                  });
                tentativas = -1;
            }
            else {
                alert("Tente novamente");
                usu = prompt("Login:");
                sen = prompt("Senha:");
            }
        }
    }  
}