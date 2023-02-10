var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
    var tablaUsuario = [];
}


var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    var idForm = 0;
}

cargarDatos();

function guardar() {
    console.log("Presiono guardar..")
    var objUsuario = JSON.stringify({
        idUsuario: (idForm > 0) ? idForm : (tablaUsuario.length + 1),
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value,
        tipo: document.getElementById("cboTipo").value,
        estado: document.getElementById("cboEstado").value
    });
    console.log(objUsuario);

    if (idForm > 0) {
        for(const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            if (varUsuario.idUsuario == idForm) {
                tablaUsuario[i] = objUsuario;
                break               
            }

        }

    }else{
        tablaUsuario.push(objUsuario);
    }


    localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
    window.location.replace("index.html");
}

function cargarDatos() {
    if (idForm > 0) {
        for(const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            if (varUsuario.idUsuario == idForm) {
                document.getElementById("txtNombre").value = varUsuario.nombre;
                document.getElementById("txtApellido").value = varUsuario.apellido;
                document.getElementById("cboTipo").value = varUsuario.tipo;
                document.getElementById("cboEstado").value = varUsuario.estado;
                break;
            }
        }
    }
}