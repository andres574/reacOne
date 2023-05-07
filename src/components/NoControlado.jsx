import { useRef, useState } from "react";

const NoControlado = () => {

    const form = useRef(null);
    const [error, setError] = useState("");

    const enviar = (e) => {
        e.preventDefault();
        setError('');
        const data = new FormData(form.current)
        const { titulo, descripcion, estado } = Object.fromEntries([...data.entries()]);


        if (!titulo.trim() || !descripcion.trim() || !estado.trim()) return setError('Llena todos los campos')
    };



    return (

        <form onSubmit={enviar} ref={form}>
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="titulo" />
            <textarea className="form-control mb-2" name="descripcion" placeholder="ingrese descripcion"></textarea>

            <select className="form-select mb-2" name="estado">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>

            {
                error !== '' && error
            }
        </form>


    )
};

export default NoControlado;