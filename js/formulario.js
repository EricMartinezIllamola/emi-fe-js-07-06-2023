let NombreError = EmailError = TelfError = GRPDError = GeneroError = DniNieError = true;

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
            localStorage.setItem("Nombre",nombre);
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
            localStorage.setItem("Email",email);
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
            localStorage.setItem("Telf",telf);
        }
    }
}

function validarDniNie() {
    let dninie = "";
    dninie = document.formulario.dninie.value;
    if (dninie === "") {
        mostrarError("errorDniNie", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorDniNie", "")
        var regex = /[XYZ]?\d{8}[A-Z]$/;
        if (regex.test(dninie) === false) {
            mostrarError("errorDniNie", "ERROR: Formato no valido")
        }
        else {
            let letradni = dninie[dninie.length-1];
            let numerodni = parseInt(dninie.match(/\d+/g));
            let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
            if (letradni != letras[numerodni % 23]) {
                mostrarError("errorDniNie", "ERROR: Número y letra no coinciden");
                console.log(letradni);
                console.log(letras[numerodni % 23]);
            } else {
                mostrarError("errorDniNie", "");
                DniNieError = false;
                localStorage.setItem("DniNie",dninie);
            }
        }
    }
}

function validarGenero() {
    let hombre = document.getElementById("hombre").checked;
    let mujer = document.getElementById("mujer").checked;
    let gato = document.getElementById("gato").checked;

    if (hombre || mujer || gato) {
        GeneroError = false;
        mostrarError("errorGenero", "");
        localStorage.setItem("hombre",hombre);
        localStorage.setItem("mujer",mujer);
        localStorage.setItem("gato",gato);
    } else {
        mostrarError("errorGenero", "ERROR: Tiene que selccionar un genero");
    }
}

function validarGRPD() {
    let GRPD = document.formulario.GRPD.checked;
    if (GRPD) {
        GRPDError = false;
        mostrarError("errorGRPD", "");
        localStorage.setItem("GRPD",GRPD);
    } else {
        mostrarError("errorGRPD", "ERROR: Es necesario aceptar GRPD");
    }
}

function validation() {
    if (!NombreError && !EmailError && !TelfError && !GRPDError && !GeneroError) {
        localStorage.clear();
        return true;
    }
    else {
        validarNombre();
        validarEmail();
        validarTelf();
        validarDniNie();
        validarGenero();
        validarGRPD();
        return false;
    }
}

window.addEventListener("load", iniciar);

function iniciar() {
    document.formulario.nombre.value = localStorage.getItem("Nombre");
    document.formulario.email.value = localStorage.getItem("Email");
    document.formulario.telf.value = localStorage.getItem("Telf");
    document.formulario.dninie.value = localStorage.getItem("DniNie");
    document.formulario.GRPD.checked = localStorage.getItem("GRPD");
    document.getElementById("hombre").checked = localStorage.getItem("hombre");
    document.getElementById("mujer").checked = localStorage.getItem("mujer");
    document.getElementById("gato").checked = localStorage.getItem("gato");
}