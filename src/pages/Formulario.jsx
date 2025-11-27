import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Input from "../components/input.jsx";

export const Formulario = () => {

    const { id } = useParams();         // <-- si existe = editar
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        if (id) {
            const contacto = store.listaDeTareas.find(c => c.id == id);
            dispatch({ type: "input_value_set", payload: contacto });
        } else {
            dispatch({
                type: "Limpiar_input",
                payload: { name: "", phone: "", email: "", address: "" }
            });
        }
    }, [id]);

    return (
        <div className="container my-5">
            <h1 className="d-flex justify-content-center">
                {id ? "Edit contact" : "Add a new contact"}
            </h1>

            <Input id={id} />
        </div>
    );
};