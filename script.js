function encriptar(){
    var texto= document.getElementById("encrypt").value.toLowerCase();
    //i afecta mayúsculas como minúsculas.
    //g afecta dola linea u oración.
    //m afecta múltiples líneas o parráfo.
    var textoEncriptado= texto.replace(/e/igm,"enter");
    var textoEncriptado= textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado= textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado= textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado= textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("notFound").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {
    var texto = document.getElementById("encrypt").value.toLowerCase();
    //i afecta mayúsculas como minúsculas.
    //g afecta dola linea u oración.
    //m afecta múltiples líneas o parráfo.
    var textoEncriptado= texto.replace(/enter/igm,"e");
    var textoEncriptado= textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado= textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado= textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado= textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("notFound").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}
function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!")

}