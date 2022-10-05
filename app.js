
let usuarios =[
    {
        nombre:"nombre-tes",
        apellido:"apellido-tes",
        dni: 1234546,
        email:"arieldg22@hotmail.com",
        id:1
    },
    {
        nombre:"nombre-tes",
        apellido:"apellido-tes",
        dni: 1234546,
        email:"arieldg22@hotmail.com",
        id:2
    },
    {
        nombre:"nombre-tes",
        apellido:"apellido-tes",
        dni: 1234546,
        email:"arieldg22@hotmail.com",
        id:3
    },
    {
        nombre:"nombre-tes",
        apellido:"apellido-tes",
        dni: 1234546,
        email:"arieldg22@hotmail.com",
        id:4
    }
];

let tbBody = document.getElementById('tableBody');

function borrar(id){
    
}

const editar = () =>{
    $("#editarUsuario").modal("show");
}

function listarUsuarios(){
    const trs=[];
    for (const user of usuarios) {
        const tr = `
        <tr>
            <td>${user.apellido}</td>
            <td>${user.nombre}</td>
            <td>${user.dni}</td>
            <td>${user.email}</td>
            <td>
                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Ver Datos">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verMas${user.id}"><i class="bi bi-eye-fill"></i></button>
                </span>
                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Elimar">
                    <button class="btn btn-danger" onclick="borrar(${user.id})"><i class="bi bi-trash3"></i></button>
                </span>
                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Editar">
                    <button class="btn btn-secondary" onclick="editar(${user.id})"><i class="bi bi-pencil-square"></i></button>
                </span>
            </td>
        </tr>
        <div class="modal fade" id="verMas${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Usuarios ${user.apellido}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <li>${user.nombre}</li>
                        <li>${user.email}</li>
                        <li>${user.dni}</li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>                    
                </div>
                </div>
            </div>
            </div>
        `
        trs.push(tr);
    }
    tbBody.innerHTML = trs.join(' ');    
}

const agregar = () =>{
    $("#nuevoUsuario").modal("show");
}

listarUsuarios();