const UniTodo = ({ todo,deleteTodo,updateTodo }) => {

    const { id, titulo, descripcion, estado, prioridad } = todo;
    return (
        <li className="list-group-item">

            <div className="d-flex justify-content-between align-items-start">
                <div>

                    <h5 className={`${estado && 'text-decoration-line-through' }`}>{titulo}</h5>
                    <p className={`${estado && 'text-decoration-line-through' }`}>{descripcion}</p>
                    <div className="d-flex gap-2">
                        <button onClick={()=> deleteTodo(id)} className="btn btn-sm btn-danger">Eliminar</button>
                        <button onClick={()=> updateTodo(id)} className="btn btn-sm btn-warning">actualizar</button>
                    </div>

                </div>
                <span className="badge bg-primary">{prioridad && 'prioritario'}</span>
            </div>

          


        </li>
    );
};

export default UniTodo;

