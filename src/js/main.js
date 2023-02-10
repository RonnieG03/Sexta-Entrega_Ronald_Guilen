
var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario == null){
    var tablaUsuario = [];
}

list();

function list() {
    console.log("Cargando lista...");

    var dataFila = '';

    if (tablaUsuario.length > 0) {
        for(const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+varUsuario.nombre+"</td>";
            dataFila += "<td>"+varUsuario.apellido+"</td>";
            dataFila += "<td>"+varUsuario.tipo+"</td>";
            dataFila += "<td>"+varUsuario.estado+"</td>";
            dataFila += "<td>"+
                        "<button type='button' class='btn btn-warning' onclick='openForm("+varUsuario.idUsuario+")'>Editar</button>"+
                        "</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataUsuarios").innerHTML = dataFila;
        
    }
}

function openForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("usuarios-form.html");
}