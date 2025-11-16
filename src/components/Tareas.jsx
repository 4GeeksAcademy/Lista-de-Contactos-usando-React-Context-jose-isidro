import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function ListaDeTareas (){
    const { store , dispatch } = useGlobalReducer();
    return (
        <>
        {store.list.map((item) => (
					<li className="list-group-item d-flex justify-content-between list-group-item-action px-5" key={item.id}>
						<p className="fs-3 text-secondary my-auto">{item.name}</p>
						<button type="button" className="btn my-auto boton border border-0" aria-label="Close" onClick={() => eliminar(item.id)}>❌</button>
					</li>
				))}
        </>
    )
} 
