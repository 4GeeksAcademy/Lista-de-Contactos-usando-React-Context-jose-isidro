
export function anhadirContacto(funciones, contacto) {

    fetch(`https://playground.4geeks.com/contact/agendas/alonso/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contacto)
    })
        .then(response => response.json())
        .then(data => {
            funciones({ type: "anhadir_tarea", payload: data })
            funciones({
                type: "Limpiar_input", payload: {
                    name: "",
                    phone: "",
                    email: "",
                    address: ""
                }
            })
        })
        .catch(e => {
            console.log("Error:", e);
        })
}

export function cargarContactos(funcion) {
    fetch("https://playground.4geeks.com/contact/agendas/alonso")
        .then(resp => resp.json())
        .then(data => {
            console.log("Tareas obtenidas:", data);
            funcion({ type: 'cargar_tareas', payload: data.contacts })
        })
        .catch(error => console.log(error))
}
