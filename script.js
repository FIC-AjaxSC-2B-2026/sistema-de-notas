function verificarNota() {

    let nota = parseFloat(document.getElementById("nota").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(nota)) {
        alert("Digite uma nota válida.");
        return;
    }

    if (nota < 0 || nota > 10) {
        alert("A nota deve estar entre 0 e 10.");
        return;
    }

    if (nota >= 6) {
        resultado.innerHTML = "Aprovado.";
    }
    else if (nota >= 1) {
        resultado.innerHTML = "Recuperação.";
    }
    else {
        resultado.innerHTML = "Reprovado.";
    }

}
