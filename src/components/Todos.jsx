import UniTodo from "./UniTodo";



const Todos = ({ todoT, deleteTodo,updateTodo }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center my-5"><b>Todos</b></h2>
            <ul className="list-group">
                {
                    todoT.map((todo) => (
                        <UniTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    ))
                }
                {todoT.length ==0 && (<li className="list-group-item text-center">Sin datos!!!</li>)
                }
            </ul>
        </div>
    );
};

export default Todos;