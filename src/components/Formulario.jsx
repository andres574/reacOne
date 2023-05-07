import Swal from "sweetalert2";
import { useState } from "react";


const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState(
        {
            titulo: 'uno',
            descripcion: 'dos',
            estado: 'pendiente',
            prioridad: true
        }
    );

    const {titulo, descripcion,estado,prioridad} = todo;


    const enviar = (e) => {
        e.preventDefault();

        if(!titulo.trim() || !descripcion.trim()){
           return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripccion obligatorio!',
                
              });              
        };
        addTodo({
            id:Date.now(),
            ...todo,
            estado:estado ==="completado",
            
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos agragados correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        
    };

    const cambioEnvio = (e)=>{
        const {name,type,checked,value} = e.target;
    setTodo({
        ...todo,
        [name]: type === 'checkbox' ? checked : value
    });
    };



    return (

        <form onSubmit={enviar} >
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="titulo" value={titulo} onChange={cambioEnvio} />
            <textarea className="form-control mb-2" name="descripcion" placeholder="ingrese descripcion" value={descripcion} onChange={cambioEnvio}></textarea>
            <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input" name="prioridad" id="inputcheck" checked={prioridad} onChange={cambioEnvio}/>
            <label htmlFor="inputcheck"> Prioridad</label>
                
            </div>
            <select className="form-select mb-2" name="estado" value={estado} onChange={cambioEnvio} >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            
           
            <button type="submit" className="btn btn-primary">Agregar datos </button>
        </form>


    )
};

export default Formulario;