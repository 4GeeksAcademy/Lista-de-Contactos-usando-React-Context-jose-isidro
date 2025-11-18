import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { eliminarContactos } from "./fetch";
import { Link } from "react-router-dom";

export default function ListaDeTareas() {
    const { store, dispatch } = useGlobalReducer();
    return (
        <>
            <div className="d-flex justify-content-end my-3">
                <Link type="button" className="btn btn-success" to="/formulario">Add new contact</Link>
            </div>

            {store.listaDeTareas.map((item) => (
                <li className="list-group-item d-flex justify-content-between list-group-item-action px-5" key={item.id}>
                    <div className="d-flex flex-row my-1">
                        <img className="rounded-circle w-25" src="src/assets/img/rigo-baby.jpg " alt="" />
                        <div className="mx-5">
                            <p className="fs-4 my-auto">{item.name}</p>
                            <p className="fs-5 text-secondary my-auto"><i className="fa-solid fa-location-dot"></i> {item.address}</p>
                            <p className="fs-5 text-secondary my-auto"><i className="fa-solid fa-phone fa-rotate-270"></i> {item.phone}</p>
                            <p className="fs-5 text-secondary my-auto"><i className="fa-solid fa-envelope"></i> {item.email}</p>
                        </div>
                    </div>
                    <button type="button" className="btn my-auto boton border border-0" aria-label="Close" onClick={() => { eliminarContactos(dispatch, item.id) }}><i className="fa-solid fa-trash-can"></i></button>
                </li>
            ))}
        </>
    )
} 
