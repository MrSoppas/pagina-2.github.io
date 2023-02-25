var contador = localStorage.getItem("contador");

if (contador === null) {
    contador = 0;
}

contador++;

localStorage.setItem("contador", contador);

document.getElementById("contador").innerHTML = contador;