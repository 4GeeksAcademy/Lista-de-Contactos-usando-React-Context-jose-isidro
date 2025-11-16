import ListaDeTareas from "./components/Tareas";

export const initialStore = () => {
  return {
    ListaDeTareas: [],
    inputValue: '',
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

    case 'input_value':
      const { inputValue } = action.payload
      return {
        ...store,
        inputValue:inputValue
      }

    case 'anhadir_tarea':

      return{
        ...store,
        ListaDeTareas:[...store.ListaDeTareas,store.inputValue]
      }
    case 'eliminar_tareas':
      const { index } = action.payload
      return {
        ...store,
        ListaDeTareas: store.ListaDeTareas.filter((_,id)=> id !== index)
      }
    
    default:
      throw Error('Unknown action.');
  }
}
