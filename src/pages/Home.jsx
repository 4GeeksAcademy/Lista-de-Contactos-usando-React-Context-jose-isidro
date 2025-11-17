import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState ,useEffect} from "react";
import Tareas from "../components/Tareas.jsx"
import { cargarContactos ,anhadirContacto} from "../components/fetch.js";
export const Home = () => {
	const { store , dispatch } = useGlobalReducer();
	useEffect(() => {
		cargarContactos(dispatch)
	}, [])

	function eliminar(id) {
		fetch(`https://playground.4geeks.com/contact/agendas/alonso/contacts/${id}`, { 
			method: "DELETE" })
		.then(response =>{
			if(response.ok)setList(list.filter((item) => item.id !== id))
			})
		.catch(error => console.log(error))
	}

	return (
		<div className="container w-50 p-3">
			<h1 className="text-center">Todos</h1>
			<ul className="list-group">
				<li className="list-group-item px-5">
					<input
						className="border-0 my-1 fs-3 text-secondary"
						name="name"
						type="text"
						value={store.inputValue.name}
						onChange={(e) => dispatch({type:'input_value',
							key:e.target.name,
							value:e.target.value})}
						placeholder="What need to be done?" />
					<button onClick={()=>{anhadirContacto(dispatch,store.inputValue)}}>enviar</button>
				</li>
				{store.listaDeTareas.map((item,index) => (
					<li className="list-group-item d-flex justify-content-between list-group-item-action px-5" key={index}>
						<p className="fs-3 text-secondary my-auto">{item.name}</p>
						<button type="button" className="btn my-auto boton border border-0" aria-label="Close" onClick={() => dispatch({type:'eliminar_tareas',payload:{index : index}})}>❌</button>
					</li>
				))}
				<li className="list-group-item">
					<small className="text-body-secondary">{store.listaDeTareas.length} item left</small>

				</li>
			</ul>
		</div >
	)
}; 