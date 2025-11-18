import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState ,useEffect} from "react";
import { cargarContactos} from "../components/fetch.js";
import Input from "../components/input.jsx";
import ListaDeTareas from "../components/contactos.jsx";
export const Home = () => {
	const { store , dispatch } = useGlobalReducer();
	useEffect(() => {
		cargarContactos(dispatch)
	}, [])
	return (
		<div className="container">
			<h1 className="text-center">Todos</h1>
			<ul className="list-group">
				<ListaDeTareas/>
			</ul>
		</div >
	)
}; 