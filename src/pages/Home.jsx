import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState ,useEffect} from "react";
import Tareas from "../components/Tareas.jsx"

export const Home = () => {
	const { store , dispatch } = useGlobalReducer();
	const [list, setList] = useState([]);
	const [tarea, setTarea] = useState('');
	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/alonso")
			.then(resp => resp.json())
			.then(data => {
				console.log("Tareas obtenidas:", data.contacts);
				store.ListaDeTareas(data.contacts);
			})
			.catch(error => console.log(error))
	}, [])

	const nuevaTarea = (e) => {
		if (e.key === "Enter" && store.inputValue.trim() !== "") {
			const tarea = {name:"",telefono:''}

			fetch(`https://playground.4geeks.com/contact/agendas/alonso/contacts`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(tarea)
			})
				.then(resp => resp.json())
				.then(data => store.ListaDeTareas([...list, data]))
				.catch(error => console.log(error))
				.finally(() => store.inputValue(""));
		}
	}

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
						type="text"
						value={store.inputValue}
						onChange={(e) => dispatch({type:'input_value',payload:{inputValue:e.target.value}})}
						onKeyDown={nuevaTarea}
						placeholder="What need to be done?" />
				</li>
				{store.ListaDeTareas.map((item,index) => (
					<li className="list-group-item d-flex justify-content-between list-group-item-action px-5" key={index}>
						<p className="fs-3 text-secondary my-auto">{item.name}</p>
						<button type="button" className="btn my-auto boton border border-0" aria-label="Close" onClick={() => dispatch({type:'eliminar_tareas',payload:{index : index}})}>❌</button>
					</li>
				))}
				<li className="list-group-item">
					<small className="text-body-secondary">{store.ListaDeTareas.length} item left</small>

				</li>
			</ul>
		</div >
	)
}; 