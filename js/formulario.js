let NombreError = EmailError = TelfError = true;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML=mensaje;
}

function validarNombre() {
    let nombre = document.formulario.nombre.value;
    if (nombre === "") {
        mostrarError("errorNombre", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorNombre", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false) {
            mostrarError("errorNombre", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorNombre", "");
            NombreError = false;
        }
    }
}

function validarEmail() {
    let email = document.formulario.email.value;
    if (email === "") {
        mostrarError("errorEmail", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorEmail", "")
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email) === false) {
            mostrarError("errorEmail", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorEmail", "");
            EmailError = false;
        }
    }
}

function validarTelf() {
    let telf = document.formulario.telf.value;
    if (telf === "") {
        mostrarError("errorTelf", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorTelf", "")
        var regex = /^[6789]+\d{8}$/;
        if (regex.test(telf) === false) {
            mostrarError("errorTelf", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorTelf", "");
            TelfError = false;
        }
    }
}

function validation() {
    if (!NombreError && !EmailError && !TelfError) return true;
    else {
        validarNombre();
        validarEmail();
        validarTelf();
        return false;
    }
}