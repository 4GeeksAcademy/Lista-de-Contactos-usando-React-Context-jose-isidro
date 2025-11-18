//este es mi POST de contacto de la api
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
//este es mi GET de contactos de la api
export function cargarContactos(funcion) {
    fetch("https://playground.4geeks.com/contact/agendas/alonso")
        .then(resp => resp.json())
        .then(data => {
            console.log("Tareas obtenidas:", data);
            funcion({ type: 'cargar_tareas', payload: data.contacts })
        })
        .catch(error => console.log(error))
}

//este es mi DETELE de contactos de la api
export function eliminarContactos(funcion,id){
    fetch(`https://playground.4geeks.com/contact/agendas/alonso/contacts/${id}`,{ 
			method: "DELETE" })
    .then(response => {
        if(response.ok){
            funcion({
                type:'eliminar_tareas',
                payload:id
            })
        }
    })
    .catch (error => (console.log("Error borrando contacto:", error)))
  }

