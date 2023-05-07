import NoControlado from "./components/NoControlado";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import Todos from "./components/Todos";

const inicialEstados =JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todo, setTodo] = useState(inicialEstados);

  useEffect(() => {
localStorage.setItem('todos',JSON.stringify(todo))
  },[todo]);

  const addTodo = ntodo => {
    setTodo([...todo, ntodo])
  }

  const deleteTodo = id => {
    const newArray = todo.filter(todo => todo.id !== id)
    setTodo(newArray)
  }

  const updateTodo = id => {
    const newarray = todo.map(tod => {
      if (tod.id === id) {
        tod.estado = !tod.estado
      }
      return tod
    })

    setTodo(newarray)
  }

  const orderTodo = arrayTodos => {
    return arrayTodos.sort((a, b) => {
      if (a.prioridad === b.prioridad) return 0
      if (a.prioridad) return -1
      if (!a.prioridad) return 1

    })
  }

  return (
    <>
      <div className="container">
        <h1 className="my-5">Formularios</h1>
        <Formulario addTodo={addTodo} />
        <Todos todoT={orderTodo(todo)} deleteTodo={deleteTodo} updateTodo={updateTodo} />

      </div>

    </>
  )
};

export default App;