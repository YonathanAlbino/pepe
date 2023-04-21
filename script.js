function ocultarContenido(contenido, id, clase) {
        if (contenido != "") {
            document.getElementById(id).classList.add(clase);
        } else {
            document.getElementById(id).classList.remove(clase);
        }
}

function MostrarContenido(contenido, id, clase) {
        if (contenido != "") {
            document.getElementById(id).classList.remove(clase);
        } else {
            document.getElementById(id).classList.add(clase);
        }
}

function encriptar_mensaje() {
        var mensaje = document.getElementById("txtMensaje");
        x = mensaje.value.split("");

        ocultarContenido(mensaje.value, "imagen", "ocultar");
        ocultarContenido(mensaje.value, "texto", "ocultar");

        MostrarContenido(mensaje.value, "btnCopiar", "ocultar");
        MostrarContenido(mensaje.value, "MensajeOculto", "ocultar");

        mensaje.value = "";

        for (let i = 0; i < x.length; i++) {
            if (x[i] === "a") {
            x[i] = "ai";
            } else if (x[i] === "e") {
            x[i] = "enter";
            } else if (x[i] === "i") {
            x[i] = "imes";
            } else if (x[i] === "o") {
            x[i] = "ober";
            } else if (x[i] === "u") {
            x[i] = "ufat";
            }
        }

        var encriptado = document.getElementById("MensajeOculto");

        var frase = "";

        for (let i = 0; i < x.length; i++) {
            frase += x[i];
        }

        encriptado.value = frase;
        console.log(frase);
}

function desencriptar() {
        var mensaje = document.getElementById("txtMensaje");

        MostrarContenido(mensaje.value, "MensajeOculto", "ocultar");
        MostrarContenido(mensaje.value, "btnCopiar", "ocultar");

        ocultarContenido(mensaje.value, "imagen", "ocultar");
        ocultarContenido(mensaje.value, "texto", "ocultar");

        var mensajeEncriptado = mensaje.value;

        for (let i = 0; i <= mensajeEncriptado.length; i++) {
            mensajeEncriptado = mensajeEncriptado.replace("ai", "a");
            mensajeEncriptado = mensajeEncriptado.replace("imes", "i");
            mensajeEncriptado = mensajeEncriptado.replace("enter", "e");
            mensajeEncriptado = mensajeEncriptado.replace("ober", "o");
            mensajeEncriptado = mensajeEncriptado.replace("ufat", "u");
        }

        document.getElementById("MensajeOculto").value = mensajeEncriptado;
}

function copiarTexto() {
        let textoCopiado = document.getElementById("MensajeOculto");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, textoCopiado.value.length);
        document.execCommand("copy");
}
