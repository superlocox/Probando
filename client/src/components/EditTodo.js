import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {

  const[nombre, setNombre] = useState(todo.nombre);
  const[precio, setPrecio] = useState(todo.precio);
  const[cantidad, setCantidad] = useState(todo.cantidad);
  //editText function

  const updateProducto = async (id) => {
    try {
      // const body = { description };
      const body = {nombre, precio, cantidad};

      //proxy
      // eslint-disable-next-line
      console.log(body);
      // eslint-disable-next-line
      const res = await fetch(`/productos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const setear = ()=>{
    setNombre(todo.nombre);
    setPrecio(todo.precio);
    setCantidad(todo.cantidad);
}

  return (
    <Fragment>
    <button type="button" className="btn btn-warning" onClick={()=>setear()} data-bs-toggle="modal" data-bs-target={`#id${todo.id}`} >
    Editar
    </button>

    <div className="modal fade" id={`id${todo.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Editar</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Nombre</span>
            </div>
            <input type="text" className="form-control" placeholder="Nombre" aria-label="Default"  value={nombre} onChange={e=> setNombre(e.target.value)} aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Precio</span>
            </div>
            <input type="text" className="form-control" placeholder="Precio" aria-label="Default" value={precio} onChange={e=> setPrecio(e.target.value)}  aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Cantidad</span>
            </div>
            <input type="text" className="form-control" placeholder="Cantidad" aria-label="Default" value={cantidad} onChange={e=> setCantidad(e.target.value)}  aria-describedby="basic-addon1"/>
        </div>


        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e=> updateProducto(`${todo.id}`)}>Editar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>setear() }>Cerrar</button>
        </div>
        </div>
    </div>
    </div>
</Fragment>
  );
};

export default EditTodo;
