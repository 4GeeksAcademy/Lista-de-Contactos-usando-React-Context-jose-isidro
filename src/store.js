import { act } from "react";
import ListaDeTareas from "./components/contactos";

export const initialStore = () => {
  return {
    listaDeTareas: [],
    inputValue: {
      name: "",
      phone: "",
      email: "",
      address: ""
    },
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}


export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      }
    
    case 'cargar_tareas':
        return {
          ...store,
          listaDeTareas: action.payload
        }

    case 'input_value':
      return {
        ...store,
        inputValue: {
          ...store.inputValue,
          [action.key]: action.value
        }
      };

    case 'anhadir_tarea':

      return {
        ...store,
        listaDeTareas: [...store.listaDeTareas, action.payload]
      }
    case 'eliminar_tareas':
      return {
        ...store,
        listaDeTareas: store.listaDeTareas.filter((item) => item.id !== action.payload)
      }

    case "Limpiar_input":
      return { ...store, inputValue: action.payload };

    default:
      throw Error('Unknown action.');
  }
}
