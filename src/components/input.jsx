import useGlobalReducer from "../hooks/useGlobalReducer";
import { cargarContactos, anhadirContacto } from "../components/fetch.js";
import { Link } from "react-router-dom";

export default function Input() {
    const { store, dispatch } = useGlobalReducer();
    return (
        <>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" name="name"
                    value={store.inputValue.name}
                    onChange={(e) => dispatch({
                        type: 'input_value',
                        key: e.target.name,
                        value: e.target.value
                    })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email"
                    value={store.inputValue.email}
                    onChange={(e) => dispatch({
                        type: 'input_value',
                        key: e.target.name,
                        value: e.target.value
                    })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" placeholder="Enter phone" name="phone"
                    value={store.inputValue.phone}
                    onChange={(e) => dispatch({
                        type: 'input_value',
                        key: e.target.name,
                        value: e.target.value
                    })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter address" name="address"
                    value={store.inputValue.address}
                    onChange={(e) => dispatch({
                        type: 'input_value',
                        key: e.target.name,
                        value: e.target.value
                    })} />
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={() => { anhadirContacto(dispatch, store.inputValue) }}>Save</button>
            </div>
            <Link rel="stylesheet" to="/">or get back to contacts</Link>

        </>
    )
}