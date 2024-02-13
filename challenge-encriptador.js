function Encriptador(event) {
    event.preventDefault();

    // Se obtiene el texto ingresado
    var inputTexto = document.getElementById("ingresotxt");
    var textoOriginal = inputTexto.value;

    if (/[^a-z\s]/.test(textoOriginal)) {
        alert("⚠ El texto solo debe contener letras minúsculas.");
        inputTexto.value = "";  // Borrar el texto ingresado
        return;
    }

    // Convertir a minúsculas
    textoOriginal = textoOriginal.toLowerCase();

    // Limpiar el contenido del textarea de entrada
    inputTexto.value = "";

    // Aplicar la encriptación
    var textoEncriptado = encriptarTexto(textoOriginal);

    // Mostrar el resultado en el textarea correspondiente
    document.getElementById("resultadoEncriptacion").value = textoEncriptado;

}


function encriptarTexto(texto) {
    // Reglas de encriptación
    var reglasEncriptacion = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    // Aplica reglas de encriptación al texto
    var textoEncriptado = texto.replace(/[eiou]/g, function(match) {
        return reglasEncriptacion[match];
    });

    return textoEncriptado;
}

function Desencriptador(event) {
    event.preventDefault();

    // Obtiene el texto encriptado desde el textarea
    var textoEncriptado = document.getElementById("ingresotxt").value.toLowerCase();

    // Desencripta el texto
    var textoDesencriptado = desencriptarTexto(textoEncriptado);

    // Muestra el resultado desencriptado en el textarea
    document.getElementById("resultadoEncriptacion").value = textoDesencriptado;

    // Limpia el contenido del textarea
    document.getElementById("ingresotxt").value = "";

}

function desencriptarTexto(texto) {
    // Reglas de desencriptación inversas
    var reglasDesencriptacion = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    // Aplica las reglas de desencriptación al texto
    var textoDesencriptado = texto.replace(/(enter|imes|ai|ober|ufat)/g, function(match) {
        return reglasDesencriptacion[match];
    });

    return textoDesencriptado;
}

function copiarTexto() {
    var resultadoEncriptacion = document.getElementById("resultadoEncriptacion");

    // Obtiene el texto encriptado
    var textoEncriptado = resultadoEncriptacion.value;

    // Limpia el contenido del textarea
    resultadoEncriptacion.value = "";

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textoEncriptado)
        .then(function() {
            alert("Texto copiado correctamente.");
        })
        .catch(function(err) {
            console.error('No se pudo copiar el texto: ', err);
        });
}

function limpiartexto() {
    // Limpia el contenido del textarea
    document.getElementById("ingresotxt").value = "";

    // Limpia el contenido del textarea
    document.getElementById("resultadoEncriptacion").value = "";
}

