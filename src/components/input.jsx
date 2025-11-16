import useGlobalReducer from "../hooks/useGlobalReducer";

export default function Input() {
    const { store , dispatch } = useGlobalReducer();
    return (
        <input
            className="border-0 my-1 fs-3 text-secondary"
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            onKeyDown={nuevaTarea}
            placeholder="What need to be done?" />
    )
}